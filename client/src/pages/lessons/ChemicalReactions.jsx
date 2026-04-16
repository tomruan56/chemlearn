import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-red-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-red-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-red-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Formula({ children }) {
  return (
    <div className="bg-gray-900 border border-red-900 rounded-lg p-4 font-mono text-red-300 text-center text-base my-3">
      {children}
    </div>
  )
}

export default function ChemicalReactions() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-red-400 hover:text-red-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl sm:text-5xl">⚗️</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Chemical Reactions</h1>
          <p className="text-gray-400">Types, rates, redox, and energy changes</p>
        </div>
      </div>

      <Section title="1. Types of Chemical Reactions">
        <div className="space-y-3 mb-4">
          {[
            ['Synthesis (Combination)', 'A + B → AB', 'Two or more substances combine into one product.', '2Mg + O₂ → 2MgO'],
            ['Decomposition', 'AB → A + B', 'One compound breaks down into two or more simpler products.', 'CaCO₃ → CaO + CO₂'],
            ['Single Displacement', 'A + BC → AC + B', 'One element replaces another in a compound.', 'Zn + CuSO₄ → ZnSO₄ + Cu'],
            ['Double Displacement', 'AB + CD → AD + CB', 'Two compounds exchange ions (often forms precipitate or gas).', 'AgNO₃ + NaCl → AgCl↓ + NaNO₃'],
            ['Combustion', 'Fuel + O₂ → CO₂ + H₂O', 'Rapid reaction with oxygen, releases energy as heat and light.', 'CH₄ + 2O₂ → CO₂ + 2H₂O'],
            ['Acid–Base (Neutralisation)', 'Acid + Base → Salt + Water', 'H⁺ and OH⁻ ions combine.', 'HCl + NaOH → NaCl + H₂O'],
          ].map(([type, pattern, desc, ex]) => (
            <div key={type} className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-red-300">{type}</span>
                <span className="font-mono text-xs bg-gray-900 px-2 py-0.5 rounded text-gray-400">{pattern}</span>
              </div>
              <p className="text-gray-300 text-sm">{desc}</p>
              <p className="font-mono text-xs text-yellow-300 mt-1">{ex}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="2. Balancing Chemical Equations">
        <p className="text-gray-300 mb-3">
          A balanced equation has the same number of each atom on both sides (conservation of mass).
        </p>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">Steps:</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-300">
            <li>Write unbalanced equation with correct formulas.</li>
            <li>Count atoms of each element on each side.</li>
            <li>Adjust coefficients (never subscripts!) to balance.</li>
            <li>Start with the most complex molecule, leave H and O for last.</li>
            <li>Verify all atoms balance and coefficients are whole numbers in lowest ratio.</li>
          </ol>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
          <p className="text-gray-400">Unbalanced: C₃H₈ + O₂ → CO₂ + H₂O</p>
          <p className="text-yellow-300 mt-1">Balanced: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O</p>
          <p className="text-green-300 text-xs mt-1">Check: C 3=3 ✓ H 8=8 ✓ O 10=10 ✓</p>
        </div>
      </Section>

      <Section title="3. Redox Reactions">
        <p className="text-gray-300 mb-3">
          Redox reactions involve the transfer of electrons — one species is oxidised and another is reduced simultaneously.
        </p>
        <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-3 font-semibold text-center">
          <span className="text-orange-300">OIL RIG</span>
          <span className="text-gray-400 text-sm font-normal"> — </span>
          <span className="text-red-300">O</span>xidation <span className="text-red-300">I</span>s <span className="text-red-300">L</span>oss &nbsp;|&nbsp;
          <span className="text-blue-300">R</span>eduction <span className="text-blue-300">I</span>s <span className="text-blue-300">G</span>ain
        </div>
        <KeyBox term="Oxidation number">A number assigned to each atom in a compound based on electron ownership rules. Increase = oxidised; decrease = reduced.</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">Oxidation number rules:</p>
          <ul className="space-y-1 text-gray-300 list-disc list-inside">
            <li>Free element: 0 (e.g. Fe, O₂, Cl₂)</li>
            <li>Monoatomic ion: equals its charge (e.g. Na⁺ = +1)</li>
            <li>O is usually −2 (except in peroxides: −1)</li>
            <li>H is +1 when bonded to nonmetals, −1 in metal hydrides</li>
            <li>Sum of oxidation numbers = overall charge on species</li>
          </ul>
        </div>
        <KeyBox term="Reducing agent">The species that is oxidised (loses electrons) — it reduces the other species.</KeyBox>
        <KeyBox term="Oxidising agent">The species that is reduced (gains electrons) — it oxidises the other species.</KeyBox>
      </Section>

      <Section title="4. Reaction Rates">
        <p className="text-gray-300 mb-3">
          Reaction rate is the change in concentration of a reactant or product per unit time.
        </p>
        <p className="text-gray-300 mb-3 font-semibold text-white">Factors that increase reaction rate:</p>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          {[
            ['🌡️ Temperature', 'More particles have energy ≥ Eₐ. Rate roughly doubles every 10 °C rise.'],
            ['📈 Concentration', 'More particles per unit volume → more frequent collisions.'],
            ['🔬 Surface area', 'Smaller particles expose more surface → more collision sites.'],
            ['⚗️ Catalyst', 'Provides alternative pathway with lower activation energy.'],
          ].map(([f, d]) => (
            <div key={f} className="bg-gray-800 rounded-lg p-3">
              <div className="font-bold text-red-300 mb-1">{f}</div>
              <div className="text-gray-400 text-xs">{d}</div>
            </div>
          ))}
        </div>
        <KeyBox term="Activation energy (Eₐ)">The minimum energy that colliding particles must have for a reaction to occur.</KeyBox>
        <KeyBox term="Collision theory">Reactions occur when particles collide with sufficient energy AND correct orientation.</KeyBox>
      </Section>

      <Section title="5. Energy Changes & Enthalpy">
        <p className="text-gray-300 mb-3">
          Chemical reactions involve breaking bonds (endothermic) and forming bonds (exothermic).
          The net energy change is the enthalpy change (ΔH).
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">🔥</div>
            <div className="font-bold text-red-300 mb-1">Exothermic</div>
            <div className="font-mono text-yellow-300">ΔH &lt; 0</div>
            <div className="text-xs text-gray-400 mt-1">Energy released to surroundings. Products are more stable.</div>
            <div className="text-xs text-gray-500 mt-1">Examples: combustion, neutralisation</div>
          </div>
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">❄️</div>
            <div className="font-bold text-blue-300 mb-1">Endothermic</div>
            <div className="font-mono text-cyan-300">ΔH &gt; 0</div>
            <div className="text-xs text-gray-400 mt-1">Energy absorbed from surroundings. Products are less stable.</div>
            <div className="text-xs text-gray-500 mt-1">Examples: photosynthesis, dissolving NH₄NO₃</div>
          </div>
        </div>
        <Formula>ΔH = H(products) − H(reactants)</Formula>
        <KeyBox term="Hess's law">The total enthalpy change for a reaction is the same regardless of the route taken. Allows calculation of ΔH from standard enthalpies of formation.</KeyBox>
        <Formula>ΔHreaction = Σ ΔHf°(products) − Σ ΔHf°(reactants)</Formula>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>In combustion, always balance C first, then H, then O.</li>
          <li>The oxidising agent is reduced; the reducing agent is oxidised. Don't mix them up!</li>
          <li>A catalyst lowers Eₐ but does NOT change ΔH or the position of equilibrium.</li>
          <li>OIL RIG is the most important mnemonic in redox chemistry — commit it to memory.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <Link to="/quiz?topic=chemical_reactions" className="btn-primary">Quiz: Chemical Reactions →</Link>
      </div>
    </div>
  )
}
