import { Link } from 'react-router-dom'

const lessons = [
  {
    icon: '⚛️',
    title: 'Atomic Structure',
    to: '/lessons/atomic-structure',
    color: 'from-blue-900 to-blue-800',
    border: 'border-blue-700',
    summary: 'Protons, neutrons, electrons, isotopes, electron configuration, and quantum numbers.',
    topics: ['Subatomic particles', 'Isotopes & mass number', 'Electron configuration', 'Bohr model', 'Quantum numbers'],
  },
  {
    icon: '🔗',
    title: 'Chemical Bonding',
    to: '/lessons/chemical-bonding',
    color: 'from-purple-900 to-purple-800',
    border: 'border-purple-700',
    summary: 'Ionic, covalent and metallic bonds, Lewis structures, VSEPR, polarity, and intermolecular forces.',
    topics: ['Ionic bonds', 'Covalent bonds', 'Lewis structures', 'VSEPR theory', 'Polarity & IMFs'],
  },
  {
    icon: '⚗️',
    title: 'Chemical Reactions',
    to: '/lessons/chemical-reactions',
    color: 'from-red-900 to-red-800',
    border: 'border-red-700',
    summary: 'Reaction types, redox, balancing equations, reaction rates, activation energy, and enthalpy.',
    topics: ['Reaction types', 'Redox reactions', 'Balancing equations', 'Reaction rates', 'Enthalpy & ΔH'],
  },
  {
    icon: '⚖️',
    title: 'Stoichiometry',
    to: '/lessons/stoichiometry',
    color: 'from-green-900 to-green-800',
    border: 'border-green-700',
    summary: 'The mole concept, molar mass, mole ratios, limiting reagents, percent yield, and concentration.',
    topics: ['The mole & Avogadro', 'Molar mass', 'Mole ratios', 'Limiting reagents', 'Percent yield'],
  },
  {
    icon: '🧪',
    title: 'Acids & Bases',
    to: '/lessons/acids-and-bases',
    color: 'from-yellow-900 to-yellow-800',
    border: 'border-yellow-700',
    summary: 'Arrhenius, Brønsted–Lowry and Lewis definitions, pH scale, strong vs weak, titration, and buffers.',
    topics: ['Definitions (Arrhenius, B-L, Lewis)', 'pH & pOH', 'Strong vs weak', 'Neutralisation', 'Buffers & titration'],
  },
]

export default function Lessons() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Lessons</h1>
      <p className="text-gray-400 mb-8">Select a topic to study. Each lesson covers key concepts, worked examples, and tips for exams.</p>

      <div className="space-y-5">
        {lessons.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`block bg-gradient-to-r ${l.color} border ${l.border} rounded-xl p-6 hover:scale-[1.01] transition-transform duration-200 group`}
          >
            <div className="flex items-start gap-4">
              <span className="text-4xl">{l.icon}</span>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors mb-1">
                  {l.title}
                </h2>
                <p className="text-gray-300 text-sm mb-3">{l.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {l.topics.map(t => (
                    <span key={t} className="bg-black/30 rounded-full px-3 py-0.5 text-xs text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-gray-400 text-xl self-center">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
