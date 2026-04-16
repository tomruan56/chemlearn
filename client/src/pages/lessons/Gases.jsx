import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-cyan-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-cyan-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-cyan-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Formula({ children }) {
  return (
    <div className="bg-gray-800 border border-cyan-700 rounded-lg p-4 mb-4 font-mono text-center text-cyan-200 text-lg">
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

export default function Gases() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-cyan-400 hover:text-cyan-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-5xl">💨</span>
        <div>
          <h1 className="text-3xl font-bold">Gases</h1>
          <p className="text-gray-400">Gas laws, kinetic theory, and ideal behaviour</p>
        </div>
      </div>

      <Section title="1. Kinetic Molecular Theory (KMT)">
        <p className="text-gray-300 mb-4">
          KMT explains the behaviour of an ideal gas based on assumptions about particles at the molecular level.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 text-sm">
          <li>Gas particles are in constant, rapid, <strong className="text-white">random</strong> motion.</li>
          <li>Gas particles are <strong className="text-white">very small</strong> — their volume is negligible compared to the container.</li>
          <li>There are <strong className="text-white">no intermolecular forces</strong> between particles (ideal assumption).</li>
          <li>Collisions between particles and container walls are perfectly <strong className="text-white">elastic</strong> (no energy lost).</li>
          <li>Average kinetic energy is proportional to <strong className="text-white">absolute temperature (T in Kelvin)</strong>.</li>
        </ul>
        <KeyBox term="Pressure">Force per unit area exerted by gas particles colliding with container walls. Units: Pa, kPa, atm, mmHg (1 atm = 101.325 kPa = 760 mmHg).</KeyBox>
        <KeyBox term="STP">Standard Temperature and Pressure: 0 °C (273.15 K) and 1 atm. 1 mol of ideal gas occupies 22.4 L at STP.</KeyBox>
      </Section>

      <Section title="2. Boyle's Law">
        <p className="text-gray-300 mb-3">
          At <strong className="text-white">constant temperature and amount</strong>, pressure and volume are inversely proportional.
        </p>
        <Formula>P₁V₁ = P₂V₂ &nbsp;(T constant)</Formula>
        <p className="text-gray-300 mb-3">
          Increasing pressure compresses the gas into a smaller volume; doubling pressure halves the volume.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 text-sm">
          <p className="text-cyan-300 font-semibold mb-1">Example:</p>
          <p className="text-gray-300">A gas at 2 atm occupies 6 L. What volume at 4 atm?</p>
          <p className="text-yellow-300 mt-1">V₂ = P₁V₁/P₂ = (2 × 6)/4 = 3 L</p>
        </div>
      </Section>

      <Section title="3. Charles's Law">
        <p className="text-gray-300 mb-3">
          At <strong className="text-white">constant pressure and amount</strong>, volume is directly proportional to absolute temperature.
        </p>
        <Formula>V₁/T₁ = V₂/T₂ &nbsp;(P constant, T in Kelvin)</Formula>
        <p className="text-gray-300 mb-3">
          Always convert Celsius to Kelvin: K = °C + 273.15. Heating a gas at constant pressure increases its volume.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 text-sm">
          <p className="text-cyan-300 font-semibold mb-1">Example:</p>
          <p className="text-gray-300">A gas occupies 4 L at 300 K. What volume at 450 K (same pressure)?</p>
          <p className="text-yellow-300 mt-1">V₂ = V₁ × T₂/T₁ = 4 × 450/300 = 6 L</p>
        </div>
      </Section>

      <Section title="4. Gay-Lussac's & Combined Gas Law">
        <KeyBox term="Gay-Lussac's Law">At constant volume and amount, pressure is directly proportional to absolute temperature: P₁/T₁ = P₂/T₂.</KeyBox>
        <p className="text-gray-300 mb-3">Combining all three laws gives the <strong className="text-white">combined gas law</strong>:</p>
        <Formula>P₁V₁/T₁ = P₂V₂/T₂</Formula>
        <p className="text-gray-300 mb-3">Use this when only the amount (moles) is constant but P, V, and T all change.</p>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 text-sm">
          <p className="text-cyan-300 font-semibold mb-1">Example:</p>
          <p className="text-gray-300">Gas at 1 atm, 2 L, 300 K is compressed to 0.5 L at 400 K. New pressure?</p>
          <p className="text-yellow-300 mt-1">P₂ = P₁V₁T₂ / (T₁V₂) = (1 × 2 × 400) / (300 × 0.5) = 5.33 atm</p>
        </div>
      </Section>

      <Section title="5. Ideal Gas Law">
        <p className="text-gray-300 mb-3">
          The ideal gas law combines all variables including the amount of gas (moles):
        </p>
        <Formula>PV = nRT</Formula>
        <Table
          headers={['Symbol', 'Meaning', 'Units']}
          rows={[
            ['P', 'Pressure', 'atm (or kPa)'],
            ['V', 'Volume', 'L'],
            ['n', 'Moles of gas', 'mol'],
            ['R', 'Gas constant', '0.0821 L·atm·mol⁻¹·K⁻¹ or 8.314 J·mol⁻¹·K⁻¹'],
            ['T', 'Temperature', 'K (always Kelvin)'],
          ]}
        />
        <div className="bg-gray-800 rounded-lg p-4 mb-3 text-sm">
          <p className="text-cyan-300 font-semibold mb-1">Example:</p>
          <p className="text-gray-300">How many moles of gas occupy 5 L at 2 atm and 300 K?</p>
          <p className="text-yellow-300 mt-1">n = PV/RT = (2 × 5)/(0.0821 × 300) = 0.407 mol</p>
        </div>
      </Section>

      <Section title="6. Dalton's Law of Partial Pressures">
        <p className="text-gray-300 mb-3">
          In a mixture of non-reacting gases, the total pressure equals the sum of the partial pressures of each gas.
        </p>
        <Formula>P<sub>total</sub> = P₁ + P₂ + P₃ + …</Formula>
        <KeyBox term="Partial pressure">The pressure each gas would exert if it alone occupied the entire container. P_i = χ_i × P_total (where χ_i is the mole fraction).</KeyBox>
        <p className="text-gray-300 mb-3">
          Important application: gas collected over water. The total pressure includes the water vapour pressure.
        </p>
        <Formula>P<sub>gas</sub> = P<sub>total</sub> − P<sub>H₂O</sub></Formula>
      </Section>

      <Section title="7. Graham's Law of Effusion">
        <p className="text-gray-300 mb-3">
          Lighter gas molecules move faster and effuse (escape through a tiny hole) more quickly. Graham's law:
        </p>
        <Formula>rate₁ / rate₂ = √(M₂ / M₁)</Formula>
        <p className="text-gray-300 mb-3">
          where M is the molar mass. H₂ (M = 2) effuses about 4× faster than O₂ (M = 32) since √(32/2) = 4.
        </p>
        <KeyBox term="Real vs Ideal gases">Real gases deviate from ideal behaviour at high pressure and low temperature (particles have volume; intermolecular forces exist). The van der Waals equation corrects for these.</KeyBox>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-6">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>Always convert temperature to Kelvin (K = °C + 273) before using any gas law.</li>
          <li>Identify what is held constant to choose the correct gas law (P, V, T, or n).</li>
          <li>For PV = nRT, use R = 0.0821 L·atm·mol⁻¹·K⁻¹ when P is in atm and V in litres.</li>
          <li>Dalton's law: subtract water vapour pressure when gas is collected over water.</li>
          <li>Real gases behave most ideally at high temperature and low pressure.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <span className="btn-secondary opacity-50 cursor-not-allowed">Quiz coming soon</span>
      </div>
    </div>
  )
}
