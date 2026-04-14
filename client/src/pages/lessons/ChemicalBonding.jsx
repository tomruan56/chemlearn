import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-purple-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-purple-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-purple-300">{term}: </span>
      <span className="text-gray-300">{children}</span>
    </div>
  )
}

export default function ChemicalBonding() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-purple-400 hover:text-purple-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-5xl">🔗</span>
        <div>
          <h1 className="text-3xl font-bold">Chemical Bonding</h1>
          <p className="text-gray-400">How atoms join together</p>
        </div>
      </div>

      <Section title="1. Ionic Bonds">
        <p className="text-gray-300 mb-3">
          Ionic bonds form when one atom <strong className="text-white">transfers electrons</strong> to another,
          creating oppositely charged ions that attract each other by electrostatic force.
        </p>
        <KeyBox term="Cation">Positively charged ion formed when a metal loses electrons. Na → Na⁺ + e⁻</KeyBox>
        <KeyBox term="Anion">Negatively charged ion formed when a non-metal gains electrons. Cl + e⁻ → Cl⁻</KeyBox>
        <div className="bg-gray-800 rounded-lg p-4 text-sm text-gray-300 mb-3">
          <p className="font-semibold text-white mb-2">Example: NaCl formation</p>
          <p>Na (2,8,1) → Na⁺ (2,8) — loses 1 electron</p>
          <p>Cl (2,8,7) → Cl⁻ (2,8,8) — gains 1 electron</p>
          <p className="text-yellow-300 mt-1">Na⁺ + Cl⁻ → NaCl lattice (electrostatic attraction)</p>
        </div>
        <p className="text-gray-300 text-sm">
          <strong className="text-white">Properties:</strong> High melting/boiling points, conduct electricity when molten or dissolved, form crystalline lattices.
        </p>
      </Section>

      <Section title="2. Covalent Bonds">
        <p className="text-gray-300 mb-3">
          Covalent bonds form when atoms <strong className="text-white">share electrons</strong>. Each shared pair counts as one bond.
        </p>
        <div className="grid grid-cols-3 gap-3 mb-4 text-center text-sm">
          {[['Single bond', 'H–H', 'σ bond, 2 shared e⁻'], ['Double bond', 'O=O', 'σ + π, 4 shared e⁻'], ['Triple bond', 'N≡N', 'σ + 2π, 6 shared e⁻']].map(([t, ex, info]) => (
            <div key={t} className="bg-gray-800 rounded-lg p-3">
              <div className="font-bold text-purple-300">{t}</div>
              <div className="font-mono text-yellow-300 text-xl my-1">{ex}</div>
              <div className="text-gray-400 text-xs">{info}</div>
            </div>
          ))}
        </div>
        <KeyBox term="Electronegativity">A measure of an atom's ability to attract bonding electrons. Increases across a period and up a group. F is highest (4.0).</KeyBox>
        <KeyBox term="Polar covalent">When atoms have different electronegativities (ΔEN 0.4–1.7). Electrons are pulled toward the more electronegative atom, creating partial charges (δ+ and δ−). Example: H–Cl.</KeyBox>
        <KeyBox term="Nonpolar covalent">When atoms have equal or very similar electronegativities (ΔEN &lt; 0.4). Example: H–H, Cl–Cl.</KeyBox>
      </Section>

      <Section title="3. Lewis Structures">
        <p className="text-gray-300 mb-3">Lewis structures show valence electrons as dots and bonding pairs as lines.</p>
        <div className="bg-gray-800 rounded-lg p-4 text-sm mb-3">
          <p className="font-semibold text-white mb-2">Steps to draw a Lewis structure:</p>
          <ol className="list-decimal list-inside space-y-1 text-gray-300">
            <li>Count total valence electrons.</li>
            <li>Place the least electronegative atom in the centre.</li>
            <li>Connect atoms with single bonds.</li>
            <li>Complete octets on outer atoms with lone pairs.</li>
            <li>Place remaining electrons on central atom.</li>
            <li>Form double/triple bonds if central atom needs more electrons.</li>
          </ol>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm text-center">
          <p className="text-yellow-300">H₂O: H–Ö–H (O has 2 lone pairs)</p>
          <p className="text-yellow-300 mt-1">CO₂: O=C=O (each O has 2 lone pairs)</p>
          <p className="text-yellow-300 mt-1">NH₃: H–Ñ–H (N has 1 lone pair)</p>
          <p className="text-xs text-gray-400 mt-1">          H</p>
        </div>
      </Section>

      <Section title="4. VSEPR Theory">
        <p className="text-gray-300 mb-3">
          Valence Shell Electron Pair Repulsion (VSEPR): electron pairs repel each other and arrange to maximise distance.
          Lone pairs repel more than bonding pairs.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse mb-3">
            <thead>
              <tr className="bg-gray-800">
                {['Bonding pairs','Lone pairs','Shape','Bond angle','Example'].map(h => (
                  <th key={h} className="px-3 py-2 text-left text-gray-300 border border-gray-700">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['2','0','Linear','180°','CO₂, BeCl₂'],
                ['3','0','Trigonal planar','120°','BF₃, SO₃'],
                ['4','0','Tetrahedral','109.5°','CH₄, CCl₄'],
                ['3','1','Trigonal pyramidal','~107°','NH₃'],
                ['2','2','Bent','~104.5°','H₂O'],
                ['2','0','Linear','180°','CO₂'],
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}>
                  {row.map((cell, j) => <td key={j} className="px-3 py-2 border border-gray-700 text-gray-300">{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="5. Molecular Polarity & Intermolecular Forces">
        <p className="text-gray-300 mb-3">
          A molecule is polar if it has polar bonds AND an asymmetric shape (dipoles don't cancel).
        </p>
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="font-bold text-purple-300 mb-1">Polar molecules</div>
            <p className="text-gray-300 text-xs">H₂O (bent), NH₃ (pyramidal), HCl (linear, different atoms)</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-3">
            <div className="font-bold text-gray-400 mb-1">Nonpolar molecules</div>
            <p className="text-gray-300 text-xs">CO₂ (linear, bonds cancel), CH₄ (symmetric), Cl₂</p>
          </div>
        </div>
        <KeyBox term="Hydrogen bonding">Strong dipole–dipole interaction between δ+ H and a lone pair on N, O, or F. Explains water's high boiling point.</KeyBox>
        <KeyBox term="Dipole–dipole">Attraction between polar molecules. Stronger with larger polarity.</KeyBox>
        <KeyBox term="London dispersion forces">Weak temporary dipoles in all molecules. Increase with molecular size/surface area.</KeyBox>

        <Section title="6. Metallic Bonding">
          <p className="text-gray-300 mb-3">
            Metals consist of a lattice of positive ions surrounded by a 'sea' of delocalised electrons.
            This explains: electrical conductivity, thermal conductivity, malleability, and ductility.
          </p>
        </Section>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-2">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>Always check if molecular shape is symmetric before deciding polarity.</li>
          <li>Lone pairs reduce bond angles by ~2.5° each from ideal tetrahedral.</li>
          <li>Bond strength: triple &gt; double &gt; single; bond length: triple &lt; double &lt; single.</li>
          <li>Hydrogen bonding requires H bonded directly to N, O, or F — not just any polar bond.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <Link to="/quiz?topic=chemical_bonding" className="btn-primary">Quiz: Chemical Bonding →</Link>
      </div>
    </div>
  )
}
