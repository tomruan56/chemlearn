import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { T } from '../i18n/translations'

// ── Parser ───────────────────────────────────────────────────────────────────

function parseFormula(formula) {
  // Returns { element: count } for a molecule string like "H2SO4", "Ca(OH)2"
  const stack = [{}]
  let i = 0
  while (i < formula.length) {
    if (formula[i] === '(') {
      stack.push({})
      i++
    } else if (formula[i] === ')') {
      i++
      let num = ''
      while (i < formula.length && /\d/.test(formula[i])) { num += formula[i]; i++ }
      const mult = num ? parseInt(num) : 1
      const top = stack.pop()
      for (const [el, cnt] of Object.entries(top)) {
        stack[stack.length - 1][el] = (stack[stack.length - 1][el] || 0) + cnt * mult
      }
    } else if (/[A-Z]/.test(formula[i])) {
      let el = formula[i]; i++
      while (i < formula.length && /[a-z]/.test(formula[i])) { el += formula[i]; i++ }
      let num = ''
      while (i < formula.length && /\d/.test(formula[i])) { num += formula[i]; i++ }
      const cnt = num ? parseInt(num) : 1
      stack[stack.length - 1][el] = (stack[stack.length - 1][el] || 0) + cnt
    } else {
      i++ // skip unexpected chars
    }
  }
  return stack[0]
}

function parseSide(side) {
  // Side: "H2 + O2" or "2H2O + CO2"
  return side.split('+').map(part => {
    const trimmed = part.trim()
    // optional leading coefficient
    const m = trimmed.match(/^(\d+(?:\.\d+)?)\s*(.+)$/)
    if (m) return { coeff: parseFloat(m[1]), formula: m[2].trim() }
    return { coeff: 1, formula: trimmed }
  })
}

// ── Fraction arithmetic ──────────────────────────────────────────────────────

function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { [a, b] = [b, a % b] } return a }
function lcm(a, b) { return (a / gcd(a, b)) * b }

// Gaussian elimination over rationals
// Returns solution vector or null
function solve(matrix, numVars) {
  // matrix rows are equations, last col is RHS (all 0 since homogeneous)
  // We want non-trivial solution: set last variable = 1 and solve
  const n = matrix.length
  const m = numVars

  // Augmented matrix (fractions stored as [num, den])
  const A = matrix.map(row => row.map(v => [v, 1]))

  function fAdd([an, ad], [bn, bd]) {
    const num = an * bd + bn * ad; const den = ad * bd; const g = gcd(Math.abs(num), Math.abs(den))
    return [num / g, den / g]
  }
  function fMul([an, ad], [bn, bd]) {
    const num = an * bn; const den = ad * bd; const g = gcd(Math.abs(num), Math.abs(den))
    return [num / g, den / g]
  }
  function fNeg([a, b]) { return [-a, b] }
  function fDiv([an, ad], [bn, bd]) { return fMul([an, ad], [bd, bn]) }

  // Set last variable = 1: move last column to RHS
  const rhs = A.map(row => fNeg(row[m - 1]))
  const B = A.map(row => row.slice(0, m - 1))

  let row = 0
  const pivotCols = []
  for (let col = 0; col < m - 1 && row < n; col++) {
    // Find pivot
    let pivotRow = -1
    for (let r = row; r < n; r++) {
      if (B[r][col][0] !== 0) { pivotRow = r; break }
    }
    if (pivotRow === -1) continue
    ;[B[row], B[pivotRow]] = [B[pivotRow], B[row]]
    ;[rhs[row], rhs[pivotRow]] = [rhs[pivotRow], rhs[row]]

    const pivot = B[row][col]
    B[row] = B[row].map(v => fDiv(v, pivot))
    rhs[row] = fDiv(rhs[row], pivot)

    for (let r = 0; r < n; r++) {
      if (r === row) continue
      const factor = B[r][col]
      if (factor[0] === 0) continue
      B[r] = B[r].map((v, j) => fAdd(v, fNeg(fMul(factor, B[row][j]))))
      rhs[r] = fAdd(rhs[r], fNeg(fMul(factor, rhs[row])))
    }
    pivotCols.push({ col, row })
    row++
  }

  // Extract solution
  const sol = Array(m - 1).fill([0, 1])
  for (const { col, row: r } of pivotCols) {
    sol[col] = rhs[r]
  }
  sol.push([1, 1]) // last variable = 1

  // Convert to integers: LCM of all denominators
  const l = sol.reduce((acc, [, d]) => lcm(acc, Math.abs(d)), 1)
  const intSol = sol.map(([n, d]) => Math.round((n / d) * l))

  if (intSol.some(v => v <= 0)) return null

  // Simplify by GCD
  const g = intSol.reduce((acc, v) => gcd(acc, v), intSol[0])
  return intSol.map(v => v / g)
}

// ── Main balancer ────────────────────────────────────────────────────────────

function balanceEquation(input) {
  // Normalise input
  const clean = input
    .replace(/→|->|=>|=>/g, '->')
    .replace(/\s+/g, ' ')
    .trim()

  const arrowMatch = clean.match(/^(.+)->(.+)$/)
  if (!arrowMatch) return { error: 'Use → or -> to separate reactants and products. Example: H2 + O2 -> H2O' }

  let leftMolecules, rightMolecules
  try {
    leftMolecules = parseSide(arrowMatch[1])
    rightMolecules = parseSide(arrowMatch[2])
  } catch {
    return { error: 'Could not parse formula. Check your equation.' }
  }

  const allMolecules = [...leftMolecules, ...rightMolecules]
  const numMols = allMolecules.length

  if (numMols < 2) return { error: 'Enter at least two compounds.' }

  // Collect all elements
  const allElements = []
  for (const mol of allMolecules) {
    const counts = parseFormula(mol.formula)
    for (const el of Object.keys(counts)) {
      if (!allElements.includes(el)) allElements.push(el)
    }
  }

  if (allElements.length === 0) return { error: 'No valid chemical formulas detected.' }

  // Build matrix: rows = elements, cols = molecules
  // Left side positive, right side negative
  const matrix = allElements.map(el => {
    return allMolecules.map((mol, i) => {
      const counts = parseFormula(mol.formula)
      const sign = i < leftMolecules.length ? 1 : -1
      return sign * (counts[el] || 0)
    })
  })

  if (numMols === 1) return { error: 'Need at least two molecules.' }

  const coeffs = solve(matrix, numMols)
  if (!coeffs || coeffs.some(c => !Number.isFinite(c) || c <= 0)) {
    return { error: 'Could not balance this equation. Check that it is chemically valid.' }
  }

  // Build result
  const leftStr = leftMolecules.map((mol, i) => {
    const c = coeffs[i]
    return c === 1 ? mol.formula : `${c}${mol.formula}`
  }).join(' + ')

  const rightStr = rightMolecules.map((mol, i) => {
    const c = coeffs[leftMolecules.length + i]
    return c === 1 ? mol.formula : `${c}${mol.formula}`
  }).join(' + ')

  // Build atom check
  const check = {}
  for (const el of allElements) {
    let leftCount = 0, rightCount = 0
    leftMolecules.forEach((mol, i) => {
      const counts = parseFormula(mol.formula)
      leftCount += coeffs[i] * (counts[el] || 0)
    })
    rightMolecules.forEach((mol, i) => {
      const counts = parseFormula(mol.formula)
      rightCount += coeffs[leftMolecules.length + i] * (counts[el] || 0)
    })
    check[el] = { left: leftCount, right: rightCount }
  }

  return {
    balanced: `${leftStr} → ${rightStr}`,
    coefficients: allMolecules.map((mol, i) => ({ formula: mol.formula, coeff: coeffs[i] })),
    leftMolecules, rightMolecules, leftCoeffs: coeffs.slice(0, leftMolecules.length),
    rightCoeffs: coeffs.slice(leftMolecules.length),
    atomCheck: check,
  }
}

// ── Component ────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Combustion of methane', eq: 'CH4 + O2 -> CO2 + H2O' },
  { label: 'Formation of ammonia (Haber)', eq: 'N2 + H2 -> NH3' },
  { label: 'Iron rusting', eq: 'Fe + O2 -> Fe2O3' },
  { label: 'Electrolysis of water', eq: 'H2O -> H2 + O2' },
  { label: 'Combustion of propane', eq: 'C3H8 + O2 -> CO2 + H2O' },
  { label: 'Thermite reaction', eq: 'Al + Fe2O3 -> Al2O3 + Fe' },
]

export default function EquationBalancer() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState(null)
  const { lang } = useLanguage()
  const t = k => T[lang]?.[k] ?? T.en[k] ?? k

  function handleBalance(eq) {
    const r = balanceEquation(eq || input)
    setResult(r)
  }

  function loadExample(eq) {
    setInput(eq)
    setResult(null)
    setTimeout(() => handleBalance(eq), 0)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-4xl sm:text-5xl">⚖️</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{t('bal_title')}</h1>
          <p className="text-gray-400 text-sm sm:text-base">{t('bal_sub')}</p>
        </div>
      </div>

      <div className="card mb-4 mt-6">
        <label className="block text-sm text-gray-400 mb-2">
          Enter equation (use <code className="bg-gray-800 px-1 rounded">-&gt;</code> or <code className="bg-gray-800 px-1 rounded">→</code> for the arrow, <code className="bg-gray-800 px-1 rounded">+</code> between compounds):
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            className="input flex-1 font-mono"
            placeholder="e.g. H2 + O2 -> H2O"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleBalance()}
          />
          <button onClick={() => handleBalance()} className="btn-primary px-6 flex-shrink-0">
            Balance
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Tip: use capital letters for elements. Parentheses supported: Ca(OH)2, Al2(SO4)3.
        </p>
      </div>

      {/* Examples */}
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-2">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => loadExample(ex.eq)}
              className="bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg px-3 py-1.5 text-xs transition-colors"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      {result && (
        <div className="card">
          {result.error ? (
            <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-red-300">
              {result.error}
            </div>
          ) : (
            <>
              <h2 className="font-bold text-lg mb-1 text-green-400">Balanced Equation</h2>
              <div className="bg-gray-800 rounded-xl p-3 sm:p-5 mb-4 text-center overflow-x-auto">
                <span className="font-mono text-base sm:text-xl md:text-2xl text-white whitespace-nowrap">
                  {result.leftMolecules.map((mol, i) => (
                    <span key={i}>
                      {i > 0 && <span className="text-gray-400"> + </span>}
                      {result.leftCoeffs[i] !== 1 && (
                        <span className="text-yellow-400">{result.leftCoeffs[i]}</span>
                      )}
                      <span className="text-blue-300">{mol.formula}</span>
                    </span>
                  ))}
                  <span className="text-gray-400 mx-3">→</span>
                  {result.rightMolecules.map((mol, i) => (
                    <span key={i}>
                      {i > 0 && <span className="text-gray-400"> + </span>}
                      {result.rightCoeffs[i] !== 1 && (
                        <span className="text-yellow-400">{result.rightCoeffs[i]}</span>
                      )}
                      <span className="text-green-300">{mol.formula}</span>
                    </span>
                  ))}
                </span>
              </div>

              {/* Atom count check */}
              <h3 className="font-semibold text-gray-300 mb-2">Atom balance check</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse mb-4">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="px-2 sm:px-4 py-1.5 sm:py-2 text-left border border-gray-700 text-gray-300">Element</th>
                      <th className="px-2 sm:px-4 py-1.5 sm:py-2 text-center border border-gray-700 text-gray-300">Left</th>
                      <th className="px-2 sm:px-4 py-1.5 sm:py-2 text-center border border-gray-700 text-gray-300">Right</th>
                      <th className="px-2 sm:px-4 py-1.5 sm:py-2 text-center border border-gray-700 text-gray-300">✓</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(result.atomCheck).map(([el, { left, right }]) => (
                      <tr key={el} className="bg-gray-900">
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-700 font-bold text-blue-300">{el}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-700 text-center">{left}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-700 text-center">{right}</td>
                        <td className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-700 text-center">
                          {left === right ? <span className="text-green-400">✓</span> : <span className="text-red-400">✗</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Coefficients */}
              <h3 className="font-semibold text-gray-300 mb-2">Coefficients</h3>
              <div className="flex flex-wrap gap-2">
                {result.coefficients.map(({ formula, coeff }) => (
                  <span key={formula} className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm font-mono">
                    <span className="text-yellow-400">{coeff}</span>
                    <span className="text-blue-300 ml-1">{formula}</span>
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* How it works */}
      <div className="card mt-6 text-sm text-gray-400">
        <h3 className="font-semibold text-gray-300 mb-2">How it works</h3>
        <p className="mb-2">
          The balancer uses <strong className="text-gray-200">Gaussian elimination</strong> (linear algebra) to find the smallest whole-number coefficients that satisfy the law of conservation of mass.
        </p>
        <p>
          Each unique element produces one linear equation. Solving the system gives the balancing coefficients.
        </p>
      </div>
    </div>
  )
}
