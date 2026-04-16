import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-violet-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-violet-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-violet-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

function Formula({ children }) {
  return (
    <div className="bg-gray-800 border border-violet-700 rounded-lg p-4 mb-4 font-mono text-center text-violet-200 text-lg">
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

export default function NuclearChemistry() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-violet-400 hover:text-violet-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl sm:text-5xl">☢️</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Nuclear Chemistry</h1>
          <p className="text-gray-400">Radioactivity, half-life, fission, and fusion</p>
        </div>
      </div>

      <Section title="1. The Nucleus & Nuclear Stability">
        <p className="text-gray-300 mb-4">
          The nucleus contains protons and neutrons held together by the <strong className="text-white">strong nuclear force</strong>, which overcomes electrostatic repulsion between protons at very short ranges.
        </p>
        <KeyBox term="Nucleon">Any particle in the nucleus (proton or neutron). Nucleon number = mass number (A).</KeyBox>
        <KeyBox term="Nuclide">A specific nucleus characterised by its proton number (Z) and mass number (A). Written as ᴬ_Z X, e.g., ¹⁴_6 C.</KeyBox>
        <p className="text-gray-300 mb-3">
          Nuclei with a neutron-to-proton ratio too high or too low are unstable and undergo radioactive decay.
        </p>
        <KeyBox term="Binding energy">The energy required to completely separate all nucleons in a nucleus. Released when a nucleus forms from its nucleons (mass defect × c²). Higher binding energy per nucleon = more stable nucleus.</KeyBox>
      </Section>

      <Section title="2. Types of Radioactive Decay">
        <Table
          headers={['Radiation', 'Symbol', 'Composition', 'Charge', 'Penetrating power']}
          rows={[
            ['Alpha (α)', 'α or ⁴₂He', '2 protons + 2 neutrons', '+2', 'Low — stopped by paper or skin'],
            ['Beta-minus (β⁻)', 'β⁻ or ⁰₋₁e', 'Electron', '−1', 'Medium — stopped by few mm aluminium'],
            ['Beta-plus (β⁺)', 'β⁺ or ⁰₊₁e', 'Positron', '+1', 'Medium — annihilates with electron'],
            ['Gamma (γ)', 'γ', 'High-energy photon', '0', 'High — requires lead or thick concrete'],
          ]}
        />
        <p className="text-gray-300 mb-3">In nuclear equations, <strong className="text-white">mass numbers (A)</strong> and <strong className="text-white">atomic numbers (Z)</strong> are conserved on both sides.</p>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          <p className="text-violet-300 mb-1">Alpha decay: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He</p>
          <p className="text-violet-300 mb-1">Beta-minus: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e + antineutrino</p>
          <p className="text-violet-300">Gamma: no change in Z or A — just energy release</p>
        </div>
      </Section>

      <Section title="3. Half-Life">
        <p className="text-gray-300 mb-3">
          The <strong className="text-white">half-life (t½)</strong> is the time taken for half the nuclei in a sample to decay. It is constant for a given isotope regardless of temperature, pressure, or chemical state.
        </p>
        <Formula>N = N₀ × (½)^(t/t½)</Formula>
        <Table
          headers={['Symbol', 'Meaning']}
          rows={[
            ['N₀', 'Initial number of radioactive nuclei (or initial activity/mass)'],
            ['N',  'Number remaining after time t'],
            ['t',  'Elapsed time'],
            ['t½', 'Half-life of the isotope'],
          ]}
        />
        <div className="bg-gray-800 rounded-lg p-4 mb-3 text-sm">
          <p className="text-violet-300 font-semibold mb-1">Example:</p>
          <p className="text-gray-300">A sample of ¹⁴C (t½ = 5730 yr) starts with 1000 atoms. How many remain after 17190 years?</p>
          <p className="text-yellow-300 mt-1">17190 / 5730 = 3 half-lives → N = 1000 × (½)³ = 125 atoms</p>
        </div>
        <p className="text-gray-300 mb-2">The decay constant λ is related to t½ by:</p>
        <Formula>λ = ln 2 / t½ ≈ 0.693 / t½</Formula>
      </Section>

      <Section title="4. Applications of Radioactivity">
        <Table
          headers={['Application', 'Radiation used', 'How it works']}
          rows={[
            ['Carbon dating (¹⁴C)', 'Beta', 'Living things maintain constant ¹⁴C ratio; after death ratio decays → age from remaining ¹⁴C'],
            ['Medical imaging (PET scan)', 'Beta-plus (positron)', 'Positron-emitting tracer injected; annihilation photons detected by scanner'],
            ['Cancer radiotherapy', 'Gamma (Co-60)', 'Gamma rays targeted to kill tumour cells'],
            ['Smoke detectors', 'Alpha (Am-241)', 'Alpha particles ionise air; smoke absorbs ions and triggers alarm'],
            ['Industrial thickness gauging', 'Beta/Gamma', 'Detector measures radiation through material; attenuation indicates thickness'],
          ]}
        />
      </Section>

      <Section title="5. Nuclear Fission">
        <KeyBox term="Nuclear fission">A heavy nucleus (e.g., ²³⁵U) splits into two smaller nuclei after absorbing a neutron, releasing enormous energy and additional neutrons which can trigger further fission.</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          <p className="text-violet-300">²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy (~200 MeV)</p>
        </div>
        <p className="text-gray-300 mb-3">
          A <strong className="text-white">chain reaction</strong> occurs when released neutrons cause further fissions. In a nuclear reactor, control rods (e.g., boron) absorb excess neutrons to maintain a controlled, sustainable chain reaction. In a weapon, the chain reaction is uncontrolled.
        </p>
        <KeyBox term="Critical mass">The minimum mass of fissile material needed to sustain a chain reaction.</KeyBox>
      </Section>

      <Section title="6. Nuclear Fusion">
        <KeyBox term="Nuclear fusion">Light nuclei combine to form a heavier nucleus, releasing even more energy per nucleon than fission. Powers the Sun and stars.</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          <p className="text-violet-300">²₁H + ³₁H → ⁴₂He + ¹₀n + 17.6 MeV</p>
          <p className="text-gray-400 text-xs mt-1">(deuterium + tritium → helium + neutron)</p>
        </div>
        <p className="text-gray-300 mb-3">
          Fusion requires extremely high temperatures (~10⁷–10⁸ K) to overcome electrostatic repulsion between nuclei. It is the goal of ongoing research (e.g., ITER tokamak) as it would provide clean, almost limitless energy.
        </p>
        <Table
          headers={['', 'Fission', 'Fusion']}
          rows={[
            ['Nuclei involved', 'Heavy (U-235, Pu-239)', 'Light (H isotopes)'],
            ['Energy released', 'Large (~200 MeV/reaction)', 'Even larger (~17 MeV but per lighter nuclei)'],
            ['Waste', 'Radioactive isotopes', 'Helium (non-radioactive)'],
            ['Current use', 'Nuclear power plants', 'Experimental only'],
          ]}
        />
      </Section>

      <Section title="7. Mass–Energy Equivalence">
        <p className="text-gray-300 mb-3">
          In nuclear reactions, the products have slightly less mass than the reactants. This <strong className="text-white">mass defect (Δm)</strong> is converted to energy according to Einstein's famous equation:
        </p>
        <Formula>E = Δm × c²</Formula>
        <p className="text-gray-300 mb-3">
          where c = 3.00 × 10⁸ m/s. Even a tiny mass defect releases an enormous amount of energy — the basis for both nuclear power and nuclear weapons.
        </p>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-6">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>In nuclear equations, check that both mass numbers (A) and atomic numbers (Z) are conserved.</li>
          <li>Alpha emission: A decreases by 4, Z decreases by 2. Beta-minus: Z increases by 1, A unchanged.</li>
          <li>For half-life problems, count the number of half-lives elapsed: N = N₀ × (½)ⁿ where n = t / t½.</li>
          <li>¹⁴C dating is used for organic materials up to ~50,000 years old; ²³⁸U dating for geological timescales.</li>
          <li>Fusion releases more energy per nucleon than fission but requires much higher temperature to initiate.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <span className="btn-secondary opacity-50 cursor-not-allowed">Quiz coming soon</span>
      </div>
    </div>
  )
}
