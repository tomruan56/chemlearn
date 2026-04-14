import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-yellow-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-yellow-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-yellow-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Formula({ children }) {
  return (
    <div className="bg-gray-900 border border-yellow-800 rounded-lg p-4 font-mono text-yellow-300 text-center text-lg my-3">
      {children}
    </div>
  )
}

export default function AcidsAndBases() {
  const pHScale = [
    { ph: '0–2', label: 'Strong acid', color: 'bg-red-700', example: 'HCl, H₂SO₄' },
    { ph: '3–5', label: 'Weak acid', color: 'bg-orange-600', example: 'CH₃COOH, H₂CO₃' },
    { ph: '6',   label: 'Very weak acid', color: 'bg-yellow-600', example: 'CO₂ solution' },
    { ph: '7',   label: 'Neutral', color: 'bg-green-600', example: 'Pure H₂O' },
    { ph: '8–9', label: 'Weak base', color: 'bg-teal-600', example: 'NaHCO₃, baking soda' },
    { ph: '10–12',label:'Moderate base', color: 'bg-blue-600', example: 'NH₃, Mg(OH)₂' },
    { ph: '13–14',label:'Strong base', color: 'bg-purple-700', example: 'NaOH, KOH' },
  ]

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-yellow-400 hover:text-yellow-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-5xl">🧪</span>
        <div>
          <h1 className="text-3xl font-bold">Acids & Bases</h1>
          <p className="text-gray-400">The chemistry of proton transfer</p>
        </div>
      </div>

      <Section title="1. Definitions">
        <div className="grid gap-3 mb-4">
          {[
            ['Arrhenius (1884)', 'Acid: produces H⁺ in water. Base: produces OH⁻ in water.', 'HCl → H⁺ + Cl⁻ &nbsp;|&nbsp; NaOH → Na⁺ + OH⁻'],
            ['Brønsted–Lowry (1923)', 'Acid: proton donor. Base: proton acceptor.', 'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻  (H₂O donates H⁺ to NH₃)'],
            ['Lewis (1923)', 'Acid: electron pair acceptor. Base: electron pair donor.', 'BF₃ + NH₃ → F₃B–NH₃  (BF₃ accepts e⁻ pair)'],
          ].map(([title, def, ex]) => (
            <div key={title} className="bg-gray-800 rounded-lg p-4">
              <div className="font-bold text-yellow-300 mb-1">{title}</div>
              <div className="text-gray-300 text-sm mb-1">{def}</div>
              <div className="font-mono text-xs text-gray-400" dangerouslySetInnerHTML={{ __html: ex }} />
            </div>
          ))}
        </div>
        <KeyBox term="Conjugate acid–base pair">Differ by only one H⁺. In CH₃COOH ⇌ CH₃COO⁻ + H⁺, the conjugate base is CH₃COO⁻.</KeyBox>
        <KeyBox term="Amphoteric">Can act as both acid and base. Water is the classic example: can donate or accept H⁺.</KeyBox>
      </Section>

      <Section title="2. The pH Scale">
        <p className="text-gray-300 mb-3">pH measures the concentration of hydrogen ions in solution (0–14 for aqueous solutions at 25 °C).</p>
        <Formula>pH = −log[H⁺] &nbsp;|&nbsp; [H⁺] = 10⁻ᵖᴴ</Formula>
        <Formula>pOH = −log[OH⁻] &nbsp;|&nbsp; pH + pOH = 14 (at 25 °C)</Formula>

        <div className="space-y-1 mb-4">
          {pHScale.map(row => (
            <div key={row.ph} className={`flex items-center rounded px-3 py-1.5 ${row.color} text-white text-sm`}>
              <span className="w-12 font-mono font-bold">{row.ph}</span>
              <span className="flex-1">{row.label}</span>
              <span className="text-xs opacity-80">{row.example}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="3. Strong vs Weak Acids & Bases">
        <p className="text-gray-300 mb-3">
          <strong className="text-white">Strong</strong> acids/bases fully dissociate in water. <strong className="text-white">Weak</strong> ones only partially dissociate.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="font-bold text-red-400 mb-2">Strong Acids (memorise!)</div>
            <ul className="space-y-0.5 text-gray-300 font-mono text-xs">
              <li>HCl — hydrochloric acid</li>
              <li>HBr — hydrobromic acid</li>
              <li>HI — hydroiodic acid</li>
              <li>HNO₃ — nitric acid</li>
              <li>H₂SO₄ — sulfuric acid</li>
              <li>HClO₄ — perchloric acid</li>
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="font-bold text-blue-400 mb-2">Strong Bases (memorise!)</div>
            <ul className="space-y-0.5 text-gray-300 font-mono text-xs">
              <li>NaOH — sodium hydroxide</li>
              <li>KOH — potassium hydroxide</li>
              <li>LiOH — lithium hydroxide</li>
              <li>Ca(OH)₂ — calcium hydroxide</li>
              <li>Ba(OH)₂ — barium hydroxide</li>
            </ul>
          </div>
        </div>
        <KeyBox term="Ka (acid dissociation constant)">Larger Ka → stronger acid → more dissociation. pKa = −log Ka.</KeyBox>
      </Section>

      <Section title="4. Neutralisation">
        <p className="text-gray-300 mb-3">Acid + Base → Salt + Water</p>
        <Formula>H⁺ + OH⁻ → H₂O</Formula>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="text-white font-semibold mb-1">Common examples:</p>
          <p className="text-gray-300 font-mono">HCl + NaOH → NaCl + H₂O</p>
          <p className="text-gray-300 font-mono">H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O</p>
          <p className="text-gray-300 font-mono">CH₃COOH + NaOH → CH₃COONa + H₂O</p>
        </div>
      </Section>

      <Section title="5. Titration">
        <p className="text-gray-300 mb-3">
          A titration is used to find the concentration of an unknown acid or base by reacting it with
          a known concentration (standard solution) from a burette.
        </p>
        <KeyBox term="Equivalence point">The point where moles of acid = moles of base (stoichiometrically). An indicator changes colour near here.</KeyBox>
        <Formula>c₁V₁ / n₁ = c₂V₂ / n₂</Formula>
        <p className="text-sm text-gray-400 text-center mb-3">c = concentration, V = volume, n = stoichiometric coefficient</p>
        <div className="bg-gray-800 rounded-lg p-4 text-sm">
          <p className="font-semibold text-white mb-1">Common indicators:</p>
          <p className="text-gray-300">Phenolphthalein: colourless (acid) → pink (pH &gt; 8.2) — use for strong acid / strong base</p>
          <p className="text-gray-300">Methyl orange: red (acid) → yellow (pH &gt; 4.4) — use for strong acid / weak base</p>
        </div>
      </Section>

      <Section title="6. Buffer Solutions">
        <KeyBox term="Buffer">A solution that resists changes in pH when small amounts of acid or base are added. Contains a weak acid + its conjugate base (or weak base + conjugate acid).</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 text-sm">
          <p className="font-semibold text-white mb-1">Example: Ethanoic acid buffer (CH₃COOH / CH₃COO⁻)</p>
          <p className="text-gray-300">Add H⁺: CH₃COO⁻ + H⁺ → CH₃COOH  (absorbs acid)</p>
          <p className="text-gray-300">Add OH⁻: CH₃COOH + OH⁻ → CH₃COO⁻ + H₂O  (absorbs base)</p>
          <p className="text-yellow-300 mt-2 text-xs">Blood is buffered at pH ≈ 7.4 by the H₂CO₃/HCO₃⁻ system.</p>
        </div>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>pH + pOH = 14 (at 25 °C only — temperature affects Kw).</li>
          <li>For a strong acid, [H⁺] = concentration of acid directly (fully dissociates).</li>
          <li>Equivalence point ≠ pH 7 unless both acid and base are strong.</li>
          <li>Lewis acid/base covers all reactions, including those without H⁺ transfer (e.g. metal–ligand complexes).</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <Link to="/quiz?topic=acids_and_bases" className="btn-primary">Quiz: Acids & Bases →</Link>
      </div>
    </div>
  )
}
