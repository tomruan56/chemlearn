import { Link } from 'react-router-dom'

function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-pink-400 mb-3 border-b border-gray-800 pb-1">{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children }) {
  return (
    <div className="bg-gray-800 border-l-4 border-pink-500 rounded-r-lg p-4 mb-3">
      <span className="font-bold text-pink-300">{term}: </span>
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

export default function OrganicChemistry() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className="text-pink-400 hover:text-pink-300 text-sm mb-4 inline-block">← All Lessons</Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-5xl">🧬</span>
        <div>
          <h1 className="text-3xl font-bold">Organic Chemistry</h1>
          <p className="text-gray-400">Carbon compounds, naming, and reactions</p>
        </div>
      </div>

      <Section title="1. Introduction to Organic Chemistry">
        <p className="text-gray-300 mb-4">
          Organic chemistry is the study of carbon-containing compounds. Carbon is unique because it forms 4 stable covalent bonds and can chain together into long molecules, rings, and branched structures.
        </p>
        <KeyBox term="Hydrocarbon">An organic compound containing only carbon and hydrogen atoms. The simplest organic molecules.</KeyBox>
        <KeyBox term="Homologous series">A family of compounds with the same general formula, differing by –CH₂– units. Each member has similar chemical properties but gradually changing physical properties (e.g., boiling point increases with chain length).</KeyBox>
        <Table
          headers={['Series', 'General Formula', 'Bond type', 'Example']}
          rows={[
            ['Alkanes',  'CₙH₂ₙ₊₂', 'C–C single only',      'CH₄, C₂H₆, C₃H₈'],
            ['Alkenes',  'CₙH₂ₙ',   'One C=C double bond',   'C₂H₄, C₃H₆'],
            ['Alkynes',  'CₙH₂ₙ₋₂', 'One C≡C triple bond',   'C₂H₂, C₃H₄'],
            ['Cycloalkanes', 'CₙH₂ₙ', 'Ring of C–C bonds',   'Cyclopropane C₃H₆'],
          ]}
        />
      </Section>

      <Section title="2. IUPAC Naming of Hydrocarbons">
        <p className="text-gray-300 mb-3">
          IUPAC names use a <strong className="text-white">root</strong> (chain length) + <strong className="text-white">suffix</strong> (bond type) + <strong className="text-white">prefix</strong> (substituents).
        </p>
        <Table
          headers={['Root', 'Carbon atoms', 'Alkane name']}
          rows={[
            ['meth-', '1', 'methane'],
            ['eth-',  '2', 'ethane'],
            ['prop-', '3', 'propane'],
            ['but-',  '4', 'butane'],
            ['pent-', '5', 'pentane'],
            ['hex-',  '6', 'hexane'],
            ['hept-', '7', 'heptane'],
            ['oct-',  '8', 'octane'],
          ]}
        />
        <p className="text-gray-300 mb-2 font-semibold text-white">Naming rules:</p>
        <ol className="list-decimal list-inside space-y-1 text-gray-300 mb-4 text-sm">
          <li>Find the longest carbon chain — this gives the root name.</li>
          <li>Number the chain from the end closest to the first branch.</li>
          <li>Name substituents (branches) as prefixes with position numbers: methyl (–CH₃), ethyl (–C₂H₅).</li>
          <li>Use di-, tri-, tetra- for multiple identical substituents.</li>
          <li>For alkenes/alkynes, indicate position of double/triple bond (e.g., but-2-ene).</li>
        </ol>
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          <p className="text-pink-300">CH₃–CH(CH₃)–CH₂–CH₃  →  2-methylbutane</p>
          <p className="text-pink-300 mt-1">CH₂=CH–CH₃  →  prop-1-ene (propene)</p>
        </div>
      </Section>

      <Section title="3. Functional Groups">
        <p className="text-gray-300 mb-3">
          Functional groups are specific atoms or arrangements of atoms that determine the chemical behaviour of organic molecules.
        </p>
        <Table
          headers={['Functional Group', 'Structure', 'Suffix/Prefix', 'Example']}
          rows={[
            ['Alcohol (–OH)',       'C–OH',      '-ol',       'ethanol CH₃CH₂OH'],
            ['Aldehyde (–CHO)',     'C–CH=O',    '-al',       'ethanal CH₃CHO'],
            ['Ketone (C=O)',        'C–CO–C',    '-one',      'propanone CH₃COCH₃'],
            ['Carboxylic acid',     'C–COOH',    '-oic acid', 'ethanoic acid CH₃COOH'],
            ['Ester (–COO–)',       'C–COO–C',   '-oate',     'ethyl ethanoate'],
            ['Amine (–NH₂)',        'C–NH₂',     '-amine',    'methylamine CH₃NH₂'],
            ['Amide (–CONH₂)',      'C–CONH₂',   '-amide',    'ethanamide'],
            ['Halogenoalkane',      'C–X (X=halogen)', 'halo-', 'chloromethane CH₃Cl'],
          ]}
        />
        <KeyBox term="Isomers">Compounds with the same molecular formula but different structural arrangements. Structural isomers differ in connectivity; stereoisomers differ in 3D arrangement.</KeyBox>
      </Section>

      <Section title="4. Key Reaction Types">
        <p className="text-gray-300 mb-4">Organic reactions follow predictable patterns based on functional groups and bond types.</p>

        <p className="text-white font-semibold mb-2">Substitution (alkanes + halogens, UV light)</p>
        <div className="bg-gray-800 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
          CH₄ + Cl₂ <span className="text-yellow-300">→(UV)</span> CH₃Cl + HCl &nbsp; (free-radical substitution)
        </div>

        <p className="text-white font-semibold mb-2">Addition (alkenes — break the C=C)</p>
        <div className="bg-gray-800 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
          <p>CH₂=CH₂ + H₂ → CH₃–CH₃ &nbsp;(hydrogenation, Ni catalyst)</p>
          <p className="mt-1">CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br &nbsp;(bromine water test — decolourises)</p>
          <p className="mt-1">CH₂=CH₂ + H₂O → CH₃CH₂OH &nbsp;(hydration → ethanol)</p>
        </div>

        <p className="text-white font-semibold mb-2">Elimination (alcohols → alkenes)</p>
        <div className="bg-gray-800 rounded-lg p-3 mb-4 font-mono text-sm text-gray-300">
          CH₃CH₂OH <span className="text-yellow-300">→(H₃PO₄, heat)</span> CH₂=CH₂ + H₂O
        </div>

        <p className="text-white font-semibold mb-2">Esterification (acid + alcohol ⇌ ester + water)</p>
        <div className="bg-gray-800 rounded-lg p-3 mb-3 font-mono text-sm text-gray-300">
          CH₃COOH + CH₃CH₂OH ⇌ CH₃COOC₂H₅ + H₂O &nbsp;(H⁺ catalyst, reversible)
        </div>
      </Section>

      <Section title="5. Polymers">
        <p className="text-gray-300 mb-3">
          Polymers are large molecules formed by joining many small repeat units (monomers).
        </p>
        <Table
          headers={['Type', 'How formed', 'Example']}
          rows={[
            ['Addition polymer', 'Alkene monomers add across C=C repeatedly; no by-product', 'Poly(ethene) from ethene'],
            ['Condensation polymer', 'Monomers with two functional groups react, losing small molecule (H₂O or HCl)', 'Nylon, polyester'],
          ]}
        />
        <div className="bg-gray-800 rounded-lg p-3 mb-3 font-mono text-sm text-gray-300">
          n CH₂=CH₂ → –(CH₂–CH₂)ₙ– &nbsp; (poly(ethene) / polyethylene)
        </div>
        <KeyBox term="Biodegradability">Addition polymers (e.g., polyethylene) are not easily broken down. Condensation polymers (especially those with ester or amide links) can be hydrolysed and are more biodegradable.</KeyBox>
      </Section>

      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-6">
        <h3 className="font-bold text-green-400 mb-2">Exam Tips</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          <li>Bromine water test: decolourises with alkenes (addition); no reaction with alkanes in cold/dark.</li>
          <li>Primary alcohols oxidise to aldehydes then carboxylic acids; secondary alcohols give ketones; tertiary alcohols resist oxidation.</li>
          <li>Always number the carbon chain from the end nearest the first substituent or functional group.</li>
          <li>Esterification is reversible — use excess acid/alcohol or remove product to improve yield.</li>
          <li>Addition polymers have no by-product; condensation polymers release H₂O or HCl per bond formed.</li>
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">← All Lessons</Link>
        <span className="btn-secondary opacity-50 cursor-not-allowed">Quiz coming soon</span>
      </div>
    </div>
  )
}
