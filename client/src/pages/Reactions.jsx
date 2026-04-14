import { useState, useMemo } from 'react'
import { reactions, allElements, allTypes, searchReactions } from '../data/reactions'

const TYPE_COLORS = {
  'Synthesis':                     'bg-blue-900/50 text-blue-300 border-blue-700',
  'Decomposition':                  'bg-orange-900/50 text-orange-300 border-orange-700',
  'Single Displacement':            'bg-green-900/50 text-green-300 border-green-700',
  'Single Displacement (Thermite)': 'bg-green-900/50 text-green-300 border-green-700',
  'Double Displacement':            'bg-purple-900/50 text-purple-300 border-purple-700',
  'Combustion':                     'bg-red-900/50 text-red-300 border-red-700',
  'Combustion / Oxidation':         'bg-red-900/50 text-red-300 border-red-700',
  'Synthesis / Combustion':         'bg-red-900/50 text-red-300 border-red-700',
  'Neutralisation':                 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  'Precipitation':                  'bg-teal-900/50 text-teal-300 border-teal-700',
  'Redox (Titration)':              'bg-pink-900/50 text-pink-300 border-pink-700',
  'Combustion / Respiration':       'bg-red-900/50 text-red-300 border-red-700',
}

function typeBadge(type) {
  const base = TYPE_COLORS[type] || 'bg-gray-800 text-gray-400 border-gray-600'
  return `text-xs font-semibold px-2 py-0.5 rounded-full border ${base}`
}

// Quick-pick elements shown as chips
const QUICK_ELEMENTS = ['H', 'O', 'C', 'N', 'S', 'Na', 'Ca', 'Fe', 'Cu', 'Zn', 'Mg', 'Cl', 'K', 'Al', 'Ag']

function highlight(text, query) {
  if (!query) return text
  const esc = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const parts = text.split(new RegExp(`(${esc})`, 'gi'))
  return parts.map((p, i) =>
    p.toLowerCase() === query.toLowerCase()
      ? <mark key={i} className="bg-yellow-500/30 text-yellow-200 rounded px-0.5">{p}</mark>
      : p
  )
}

function ReactionCard({ reaction, query }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-600 transition-colors">
      <button
        className="w-full text-left px-5 py-4"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Equation */}
            <p className="font-mono text-base text-white mb-2 leading-snug">
              {highlight(reaction.equation, query)}
            </p>
            {/* Badges row */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className={typeBadge(reaction.type)}>{reaction.type}</span>
              <span className="text-xs text-gray-500">{reaction.conditions}</span>
            </div>
          </div>
          <span className="text-gray-500 text-lg mt-0.5 flex-shrink-0">
            {expanded ? '▲' : '▼'}
          </span>
        </div>
      </button>

      {expanded && (
        <div className="px-5 pb-5 border-t border-gray-800 pt-4">
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">
            {reaction.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs text-gray-500 self-center">Elements involved:</span>
            {reaction.elements.map(el => (
              <span key={el} className="bg-gray-800 border border-gray-700 rounded px-2 py-0.5 text-xs font-mono text-blue-300">
                {el}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs text-gray-500 self-center">Compounds:</span>
            {reaction.involves.map(f => (
              <span key={f} className="bg-gray-800 border border-gray-700 rounded px-2 py-0.5 text-xs font-mono text-green-300">
                {f}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Reactions() {
  const [query, setQuery] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const results = useMemo(() => {
    let base = query.trim() ? searchReactions(query) : reactions
    if (typeFilter !== 'all') base = base.filter(r => r.type === typeFilter)
    return base
  }, [query, typeFilter])

  const displayed = showAll ? results : results.slice(0, 20)
  const isSearching = !!query.trim()

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="text-5xl">🔬</span>
        <div>
          <h1 className="text-3xl font-bold">Reaction Library</h1>
          <p className="text-gray-400">
            {reactions.length} reactions — search by element symbol or compound formula
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="mt-6 mb-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
            <input
              type="text"
              className="input pl-9 font-mono"
              placeholder="e.g.  Fe  ·  NaOH  ·  H2SO4  ·  CO2"
              value={query}
              onChange={e => { setQuery(e.target.value); setShowAll(false) }}
              autoFocus
            />
          </div>
          {query && (
            <button
              onClick={() => { setQuery(''); setShowAll(false) }}
              className="btn-secondary px-4"
            >
              Clear
            </button>
          )}
        </div>

        {/* Quick element chips */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          <span className="text-xs text-gray-500 self-center mr-1">Quick pick:</span>
          {QUICK_ELEMENTS.map(el => (
            <button
              key={el}
              onClick={() => { setQuery(el); setShowAll(false) }}
              className={`px-2.5 py-0.5 rounded-full text-xs font-mono border transition-colors ${
                query === el
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-300'
              }`}
            >
              {el}
            </button>
          ))}
        </div>
      </div>

      {/* Type filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setTypeFilter('all')}
          className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
            typeFilter === 'all' ? 'bg-gray-600 border-gray-500 text-white' : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
          }`}
        >
          All types
        </button>
        {['Synthesis', 'Decomposition', 'Single Displacement', 'Double Displacement', 'Combustion', 'Neutralisation', 'Precipitation'].map(t => (
          <button
            key={t}
            onClick={() => setTypeFilter(f => f === t ? 'all' : t)}
            className={`px-3 py-1 rounded-lg text-xs font-medium border transition-colors ${
              typeFilter === t
                ? typeBadge(t) + ' !rounded-lg'
                : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-500 mb-4">
        {isSearching || typeFilter !== 'all'
          ? <><span className="text-white font-semibold">{results.length}</span> reaction{results.length !== 1 ? 's' : ''} found</>
          : <>Showing all <span className="text-white font-semibold">{results.length}</span> reactions</>
        }
        {results.length === 0 && isSearching && (
          <span className="text-yellow-400 ml-2">— try a symbol like "Fe", "Na", or a formula like "HCl"</span>
        )}
      </p>

      {/* Reaction cards */}
      {results.length === 0 && !isSearching ? (
        <div className="text-center py-20 text-gray-600">
          <div className="text-5xl mb-3">🧪</div>
          <p>No reactions match your filter. Try clearing it.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {displayed.map(r => (
            <ReactionCard key={r.id} reaction={r} query={query} />
          ))}
        </div>
      )}

      {/* Show more */}
      {results.length > 20 && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="w-full mt-4 btn-secondary py-3"
        >
          Show all {results.length} reactions
        </button>
      )}
    </div>
  )
}
