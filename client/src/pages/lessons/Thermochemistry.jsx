import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-orange-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-orange-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-orange-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Formula({ children }) {
  return (
    <div className="bg-gray-800 border border-orange-700 rounded-lg p-4 mb-4 font-mono text-center text-orange-200 text-lg">
      {children}
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-800">
            {headers.map(h => <th key={h} className="px-4 py-2 text-left text-gray-300 border border-gray-700">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}>
              {row.map((cell, j) => <td key={j} className="px-4 py-2 border border-gray-700 text-gray-300">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Thermochemistry() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-orange-400 hover:text-orange-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-5xl">🔥</span>
        <div>
          <h1 className="text-3xl font-bold">Thermochemistry</h1>
          <p className="text-gray-400">Energy changes in chemical reactions</p>
        </div>
      </div>

      <Section title="1. Energy & Enthalpy">
        <p className="text-gray-300 mb-4">
          Thermochemistry studies the heat energy transferred during chemical reactions and physical changes. Energy is measured in joules (J) or kilojoules (kJ).
        </p>
        <KeyBox term="Enthalpy (H)">
          A thermodynamic quantity representing the heat content of a system at constant pressure. We measure <em>changes</em> in enthalpy: ΔH = H<sub>products</sub> − H<sub>reactants</sub>.
        </KeyBox>
        <KeyBox term="Exothermic reaction">
          Releases heat to the surroundings. ΔH is <strong className="text-red-300">negative</strong> (products have lower energy than reactants). Example: combustion.
        </KeyBox>
        <KeyBox term="Endothermic reaction">
          Absorbs heat from the surroundings. ΔH is <strong className="text-blue-300">positive</strong> (products have higher energy than reactants). Example: photosynthesis.
        </KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          <p className="text-red-300 mb-1">CH₄ + 2O₂ → CO₂ + 2H₂O &nbsp; ΔH = −890 kJ/mol (exothermic)</p>
          <p className="text-blue-300">CaCO₃ → CaO + CO₂ &nbsp; ΔH = +178 kJ/mol (endothermic)</p>
        </div>
      </Section>

      <Section title="2. Calorimetry">
        <p className="text-gray-300 mb-3">
          Calorimetry is the experimental measurement of heat transferred. The heat gained or lost by a substance is:
        </p>
        <Formula>q = mcΔT</Formula>
        <Table
          headers={['Symbol', 'Meaning', 'Units']}
          rows={[
            ['q', 'Heat transferred', 'J or kJ'],
            ['m', 'Mass of substance', 'g or kg'],
            ['c', 'Specific heat capacity', 'J g⁻¹ °C⁻¹'],
            ['ΔT', 'Temperature change (T_final − T_initial)', '°C or K'],
          ]}
        />
        <p className="text-gray-300 mb-3">
          For water, c = 4.18 J g⁻¹ °C⁻¹. In a calorimeter, heat lost by reaction = heat gained by solution:
        </p>
        <Formula>q<sub>reaction</sub> = −q<sub>solution</sub></Formula>
        <p className="text-sm text-gray-400">
          Example: 50 g water heated from 20 °C to 35 °C. q = 50 × 4.18 × 15 = 3135 J = 3.135 kJ.
        </p>
      </Section>

      <Section title="3. Hess's Law">
        <p className="text-gray-300 mb-3">
          Hess's Law states that the total enthalpy change for a reaction is the same regardless of the pathway taken — only the initial and final states matter (state function).
        </p>
        <KeyBox term="Hess's Law">
          ΔH for an overall reaction = sum of ΔH values for each step. Reactions can be added, reversed (sign of ΔH flips), or scaled (ΔH scales by the same factor).
        </KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 text-sm font-mono">
          <p className="text-gray-400 mb-2">Find ΔH for: C + ½O₂ → CO</p>
          <p className="text-green-300">Step 1: C + O₂ → CO₂ &nbsp; ΔH₁ = −393 kJ</p>
          <p className="text-yellow-300">Step 2: CO + ½O₂ → CO₂ &nbsp; ΔH₂ = −283 kJ (reverse → +283 kJ)</p>
          <p className="text-orange-300 mt-2 border-t border-gray-700 pt-2">Overall: ΔH = −393 + 283 = −110 kJ</p>
        </div>
      </Section>

      <Section title="4. Standard Enthalpy of Formation (ΔH°f)">
        <p className="text-gray-300 mb-3">
          The standard enthalpy of formation is the enthalpy change when <strong className="text-white">1 mole</strong> of a compound is formed from its elements in their standard states (25 °C, 1 atm).
        </p>
        <KeyBox term="ΔH°f of elements">
          By definition, ΔH°f = 0 for elements in their standard state (e.g., O₂(g), C(graphite), Na(s)).
        </KeyBox>
        <Formula>ΔH°<sub>rxn</sub> = Σ ΔH°f (products) − Σ ΔH°f (reactants)</Formula>
        <Table
          headers={['Compound', 'ΔH°f (kJ/mol)']}
          rows={[
            ['H₂O(l)', '−286'],
            ['CO₂(g)', '−394'],
            ['NH₃(g)', '−46'],
            ['NO(g)',  '+90'],
            ['CH₄(g)', '−75'],
          ]}
        />
      </Section>

      <Section title="5. Bond Energies">
        <p className="text-gray-300 mb-3">
          Bond energy is the energy required to break one mole of a particular bond in the gas phase. Breaking bonds <strong className="text-white">requires</strong> energy; forming bonds <strong className="text-white">releases</strong> energy.
        </p>
        <Formula>ΔH ≈ Σ (bonds broken) − Σ (bonds formed)</Formula>
        <Table
          headers={['Bond', 'Average Energy (kJ/mol)']}
          rows={[
            ['H–H',  '436'],
            ['O=O',  '498'],
            ['C–H',  '413'],
            ['C=O',  '745'],
            ['O–H',  '463'],
            ['N≡N',  '945'],
          ]}
        />
        <p className="text-sm text-gray-400">
          Bond energy calculations give approximate ΔH values (use ΔH°f data for more accurate results).
        </p>
      </Section>

      <Section title="6. Entropy & Spontaneity (Introduction)">
        <KeyBox term="Entropy (S)">
          A measure of disorder or randomness in a system. Processes that increase entropy (ΔS &gt; 0) are naturally favoured. Gases have higher entropy than liquids, which have higher entropy than solids.
        </KeyBox>
        <KeyBox term="Gibbs Free Energy (ΔG)">
          Combines enthalpy and entropy to predict spontaneity: <strong className="text-yellow-300">ΔG = ΔH − TΔS</strong>. If ΔG &lt; 0, reaction is spontaneous at that temperature.
        </KeyBox>
        <Table
          headers={['ΔH', 'ΔS', 'Spontaneous?']}
          rows={[
            ['−', '+', 'Always (ΔG always < 0)'],
            ['−', '−', 'At low temperature only'],
            ['+', '+', 'At high temperature only'],
            ['+', '−', 'Never (ΔG always > 0)'],
          ]}
        />
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-6">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>Always check the sign of ΔH — negative = exothermic, positive = endothermic.</li>
          <li>In Hess's Law: if you reverse a reaction, flip the sign of ΔH. If you multiply by a factor, multiply ΔH too.</li>
          <li>For q = mcΔT, use c = 4.18 J g⁻¹ °C⁻¹ for water unless told otherwise.</li>
          <li>ΔH°f of any element in its standard state is always zero.</li>
          <li>Bond energy method: remember "break bonds in reactants, form bonds in products."</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <span className="btn-secondary opacity-50 cursor-not-allowed">Quiz coming soon</span>
      </div>
    </div>
  )
}
