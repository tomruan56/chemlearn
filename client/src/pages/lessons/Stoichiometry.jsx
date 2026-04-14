import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-green-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-green-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-green-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Formula({ children }) {
  return (
    <div className="bg-gray-900 border border-green-800 rounded-lg p-4 font-mono text-green-300 text-center text-lg my-3">
      {children}
    </div>
  )
}

export default function Stoichiometry() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-green-400 hover:text-green-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-5xl">⚖️</span>
        <div>
          <h1 className="text-3xl font-bold">Stoichiometry</h1>
          <p className="text-gray-400">Quantitative relationships in chemistry</p>
        </div>
      </div>

      <Section title="1. The Mole & Avogadro's Number">
        <p className="text-gray-300 mb-3">
          The <strong className="text-white">mole</strong> is the SI unit for amount of substance. It bridges the
          atomic scale and the laboratory scale.
        </p>
        <KeyBox term="Avogadro's number (Nₐ)">6.022 × 10²³ particles per mole. This applies to atoms, molecules, ions, electrons — any particle.</KeyBox>
        <Formula>n = N / Nₐ &nbsp;|&nbsp; N = n × Nₐ</Formula>
        <p className="text-sm text-gray-400 text-center mb-3">n = moles &nbsp; N = number of particles</p>
      </Section>

      <Section title="2. Molar Mass">
        <p className="text-gray-300 mb-3">
          The molar mass (M) of a substance equals its relative formula mass in g/mol.
          Add atomic masses from the periodic table.
        </p>
        <KeyBox term="Molar mass formula">n = m / M</KeyBox>
        <Formula>n (mol) = mass (g) / molar mass (g mol⁻¹)</Formula>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">Worked example: moles of H₂SO₄</p>
          <p className="text-gray-300">M(H₂SO₄) = 2(1) + 32 + 4(16) = 2 + 32 + 64 = <span className="text-yellow-300">98 g/mol</span></p>
          <p className="text-gray-300">n = 49 g ÷ 98 g/mol = <span className="text-green-300">0.5 mol</span></p>
        </div>
      </Section>

      <Section title="3. Mole Ratios & Balanced Equations">
        <p className="text-gray-300 mb-3">
          Coefficients in a balanced equation give the mole ratio between reactants and products.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">Example: 2H₂ + O₂ → 2H₂O</p>
          <p className="text-gray-300">2 mol H₂ reacts with 1 mol O₂ to produce 2 mol H₂O</p>
          <p className="text-gray-300 mt-1">→ If 4 mol H₂ is used: <span className="text-green-300">4 mol H₂O produced, 2 mol O₂ needed</span></p>
        </div>
        <p className="text-gray-300 text-sm">
          Always balance the equation first. Then use ratios to scale up or down.
        </p>
      </Section>

      <Section title="4. Limiting Reagents">
        <p className="text-gray-300 mb-3">
          The <strong className="text-white">limiting reagent</strong> is the reactant that is completely consumed first,
          limiting how much product can form. The other reactant is in <strong className="text-white">excess</strong>.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">How to find the limiting reagent:</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-300">
            <li>Convert all given masses to moles.</li>
            <li>Divide each by its stoichiometric coefficient.</li>
            <li>The reactant with the smaller result is the limiting reagent.</li>
          </ol>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-sm">
          <p className="font-semibold text-white mb-2">Example: N₂ + 3H₂ → 2NH₃ &nbsp;|&nbsp; Given: 28 g N₂, 6 g H₂</p>
          <p className="text-gray-300">n(N₂) = 28/28 = 1 mol &nbsp;→&nbsp; 1/1 = 1</p>
          <p className="text-gray-300">n(H₂) = 6/2 = 3 mol &nbsp;→&nbsp; 3/3 = 1</p>
          <p className="text-green-300 mt-1">Equal ratio — both are consumed exactly (neither is in excess here).</p>
        </div>
      </Section>

      <Section title="5. Percent Yield">
        <p className="text-gray-300 mb-3">
          In practice, reactions rarely produce 100% of the theoretical yield due to side reactions,
          incomplete reactions, or product loss.
        </p>
        <Formula>% yield = (actual yield / theoretical yield) × 100%</Formula>
        <div className="bg-gray-800 rounded-lg p-4 text-sm">
          <p className="font-semibold text-white mb-2">Example:</p>
          <p className="text-gray-300">Theoretical yield of NaCl = 5.85 g</p>
          <p className="text-gray-300">Actual yield collected = 4.97 g</p>
          <p className="text-green-300 mt-1">% yield = (4.97 / 5.85) × 100 = <strong>84.9%</strong></p>
        </div>
      </Section>

      <Section title="6. Empirical & Molecular Formulas">
        <KeyBox term="Empirical formula">The simplest whole-number ratio of atoms in a compound.</KeyBox>
        <KeyBox term="Molecular formula">The actual number of each atom in a molecule. Always a whole-number multiple of the empirical formula.</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">Steps for empirical formula from % composition:</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-300">
            <li>Assume 100 g — percentages become grams.</li>
            <li>Convert grams to moles (divide by Ar).</li>
            <li>Divide all by the smallest mole value.</li>
            <li>Round to nearest whole number (multiply if needed).</li>
          </ol>
        </div>
      </Section>

      <Section title="7. Concentration & Volume">
        <Formula>c (mol L⁻¹) = n (mol) / V (L)</Formula>
        <KeyBox term="Molar concentration (c)">The number of moles of solute per litre of solution. Units: mol/L or M.</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 text-sm">
          <p className="font-semibold text-white mb-2">Example:</p>
          <p className="text-gray-300">Dissolve 4 mol NaOH in 500 mL water</p>
          <p className="text-gray-300">c = 4 mol / 0.5 L = <span className="text-green-300">8 mol/L</span></p>
        </div>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>Always convert mass to moles as the first step in any stoichiometry calculation.</li>
          <li>At STP, 1 mol of any ideal gas = 22.4 L.</li>
          <li>Empirical formula ratios: if you get 1.5, multiply all by 2; if 1.33, multiply by 3.</li>
          <li>Check your answer makes chemical sense — moles of product can't exceed moles of limiting reagent.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <Link to="/quiz?topic=stoichiometry" className="btn-primary">Quiz: Stoichiometry →</Link>
      </div>
    </div>
  )
}
