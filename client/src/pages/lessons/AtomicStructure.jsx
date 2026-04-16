import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-blue-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-blue-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-blue-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Table({ headers, rows }) {
  return (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-800">
            {headers.map(h => <th key={h} className="px-2 sm:px-4 py-1.5 sm:py-2 text-left text-gray-300 border border-gray-700 whitespace-nowrap">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}>
              {row.map((cell, j) => <td key={j} className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-700 text-gray-300">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AtomicStructure() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-blue-400 hover:text-blue-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl sm:text-5xl">⚛️</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Atomic Structure</h1>
          <p className="text-gray-400">The building blocks of matter</p>
        </div>
      </div>

      <Section title="1. Subatomic Particles">
        <p className="text-gray-300 mb-4">Every atom is made of three types of subatomic particles:</p>
        <Table
          headers={['Particle', 'Symbol', 'Charge', 'Relative Mass', 'Location']}
          rows={[
            ['Proton',   'p⁺', '+1', '1',    'Nucleus'],
            ['Neutron',  'n⁰', '0',  '1',    'Nucleus'],
            ['Electron', 'e⁻', '−1', '1/1836','Shells around nucleus'],
          ]}
        />
        <KeyBox term="Atomic number (Z)">The number of protons in an atom. It uniquely identifies an element. Example: Carbon has Z = 6.</KeyBox>
        <KeyBox term="Mass number (A)">Total number of protons + neutrons. A = Z + N. Example: Carbon-12 has A = 12 (6p + 6n).</KeyBox>
      </Section>

      <Section title="2. Isotopes">
        <p className="text-gray-300 mb-3">
          Isotopes are atoms of the same element with the <strong className="text-white">same number of protons</strong> but
          different numbers of neutrons. They have the same chemical properties but different masses.
        </p>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          <p className="text-green-300">Carbon-12: 6 protons, 6 neutrons (stable, 98.9% of carbon)</p>
          <p className="text-yellow-300">Carbon-13: 6 protons, 7 neutrons (stable, 1.1% of carbon)</p>
          <p className="text-red-300">Carbon-14: 6 protons, 8 neutrons (radioactive — used in carbon dating)</p>
        </div>
        <KeyBox term="Relative atomic mass (Ar)">
          The weighted average mass of all isotopes of an element, relative to ¹²C = 12. For chlorine: Ar ≈ 35.5 (due to ³⁵Cl and ³⁷Cl).
        </KeyBox>
      </Section>

      <Section title="3. Electron Configuration">
        <p className="text-gray-300 mb-3">
          Electrons are arranged in shells (energy levels) around the nucleus. Each shell holds a maximum number of electrons:
        </p>
        <Table
          headers={['Shell (n)', 'Max electrons (2n²)', 'Subshells']}
          rows={[
            ['1', '2',  's'],
            ['2', '8',  's, p'],
            ['3', '18', 's, p, d'],
            ['4', '32', 's, p, d, f'],
          ]}
        />
        <p className="text-gray-300 mb-3">Subshell capacities: s = 2 electrons, p = 6, d = 10, f = 14.</p>
        <p className="text-gray-300 mb-2 font-semibold text-white">Rules for filling electrons:</p>
        <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 text-sm">
          <li><strong className="text-yellow-300">Aufbau principle:</strong> Fill from lowest to highest energy level.</li>
          <li><strong className="text-yellow-300">Pauli exclusion:</strong> Max 2 electrons per orbital, with opposite spins.</li>
          <li><strong className="text-yellow-300">Hund's rule:</strong> Fill each orbital singly before pairing.</li>
        </ul>
        <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
          <p className="text-blue-300 mb-1">Na (Z=11): 1s² 2s² 2p⁶ 3s¹  or  [Ne] 3s¹</p>
          <p className="text-blue-300 mb-1">Fe (Z=26): [Ar] 3d⁶ 4s²</p>
          <p className="text-blue-300">Cl (Z=17): [Ne] 3s² 3p⁵</p>
        </div>
      </Section>

      <Section title="4. The Bohr Model">
        <p className="text-gray-300 mb-3">
          Niels Bohr (1913) proposed that electrons orbit the nucleus in fixed energy levels. When an electron
          absorbs energy it jumps to a higher level; when it falls back it emits a photon of light.
        </p>
        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 mb-3">
          <p className="text-blue-200 font-semibold mb-1">Energy of a photon emitted/absorbed:</p>
          <p className="font-mono text-yellow-300 text-lg text-center">E = hf = hc/λ</p>
          <p className="text-sm text-gray-400 mt-2 text-center">h = Planck's constant (6.626 × 10⁻³⁴ J·s)</p>
        </div>
        <p className="text-gray-300 text-sm">
          The Bohr model works well for hydrogen but fails for multi-electron atoms. It was replaced by the quantum mechanical model.
        </p>
      </Section>

      <Section title="5. Quantum Numbers">
        <p className="text-gray-300 mb-3">Each electron is described by four quantum numbers:</p>
        <Table
          headers={['Symbol', 'Name', 'Describes', 'Values']}
          rows={[
            ['n',  'Principal',        'Energy level / shell size',   '1, 2, 3, …'],
            ['l',  'Angular momentum', 'Orbital shape',               '0 to (n−1)'],
            ['mₗ', 'Magnetic',         'Orbital orientation',         '−l to +l'],
            ['mₛ', 'Spin',             'Electron spin direction',     '+½ or −½'],
          ]}
        />
        <p className="text-sm text-gray-400">
          l = 0 → s orbital (sphere) &nbsp;|&nbsp; l = 1 → p orbital (dumbbell) &nbsp;|&nbsp; l = 2 → d orbital (cloverleaf)
        </p>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-6">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>Always write electron configs with noble-gas shorthand for period 4+ elements.</li>
          <li>Cr ([Ar] 3d⁵ 4s¹) and Cu ([Ar] 3d¹⁰ 4s¹) are common exceptions — half/fully filled d subshells are extra stable.</li>
          <li>Remember: ions lose electrons from the highest n first (e.g. Fe²⁺ loses both 4s electrons).</li>
          <li>Mass number − atomic number = neutron count.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <Link to="/quiz?topic=atomic_structure" className="btn-primary">Quiz: Atomic Structure →</Link>
      </div>
    </div>
  )
}
