import { useState } from 'react'
import { elements, categoryColors } from '../data/elements'

// Build a grid: period rows × group columns (1-18), plus f-block rows below
function buildGrid() {
  const grid = Array.from({ length: 7 }, () => Array(18).fill(null))
  const lanthanides = []
  const actinides = []

  for (const el of elements) {
    if (el.category === 'lanthanide') { lanthanides.push(el); continue }
    if (el.category === 'actinide')   { actinides.push(el);   continue }
    if (el.group && el.period) {
      grid[el.period - 1][el.group - 1] = el
    }
  }
  return { grid, lanthanides, actinides }
}

const { grid, lanthanides, actinides } = buildGrid()

function ElementCell({ el, onClick, selected }) {
  if (!el) return <div />
  const colors = categoryColors[el.category] || { bg: 'bg-gray-800', text: 'text-gray-300', border: 'border-gray-700' }
  return (
    <div
      className={`element-cell relative cursor-pointer rounded border ${colors.bg} ${colors.text} ${colors.border}
        ${selected ? 'ring-2 ring-blue-400' : ''}
        flex flex-col items-center justify-center p-0.5 aspect-square min-w-0`}
      style={{ fontSize: '0.55rem' }}
      onClick={() => onClick(el)}
      title={el.name}
    >
      <span className="text-[0.5rem] opacity-60 leading-none">{el.number}</span>
      <span className="font-bold text-[0.85rem] leading-tight">{el.symbol}</span>
      <span className="text-[0.45rem] opacity-70 truncate w-full text-center leading-none">{el.name}</span>
    </div>
  )
}

export default function PeriodicTable() {
  const [selected, setSelected] = useState(null)
  const [filter, setFilter] = useState('all')

  function handleClick(el) {
    setSelected(s => s?.number === el.number ? null : el)
  }

  const filteredElements = filter === 'all' ? null : filter

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-6">
      <div className="flex flex-wrap items-center gap-3 mb-4 px-2">
        <h1 className="text-2xl font-bold">Periodic Table</h1>
        <select
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="input w-auto text-sm py-1"
        >
          <option value="all">All categories</option>
          {Object.entries(categoryColors).map(([key, val]) => (
            <option key={key} value={key}>{val.label}</option>
          ))}
        </select>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-2 mb-4 px-2">
        {Object.entries(categoryColors).map(([key, val]) => (
          <button
            key={key}
            onClick={() => setFilter(f => f === key ? 'all' : key)}
            className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs border transition-opacity ${val.bg} ${val.text} ${val.border}
              ${filter !== 'all' && filter !== key ? 'opacity-30' : 'opacity-100'}`}
          >
            <span className="w-2 h-2 rounded-sm inline-block bg-current" />
            {val.label}
          </button>
        ))}
      </div>

      {/* Main grid */}
      <div
        className="grid gap-0.5 mb-1 overflow-x-auto"
        style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', minWidth: '640px' }}
      >
        {grid.map((row, ri) =>
          row.map((el, ci) => (
            <div
              key={`${ri}-${ci}`}
              className={`transition-opacity ${filteredElements && el && el.category !== filteredElements ? 'opacity-20' : ''}`}
            >
              {el ? (
                <ElementCell el={el} onClick={handleClick} selected={selected?.number === el.number} />
              ) : (
                <div />
              )}
            </div>
          ))
        )}
      </div>

      {/* f-block gap labels */}
      <div className="grid gap-0.5 mb-0.5 overflow-x-auto" style={{ gridTemplateColumns: 'repeat(18, minmax(0, 1fr))', minWidth: '640px' }}>
        {Array(18).fill(null).map((_, i) => (
          <div key={i} className={i === 2 ? 'col-span-1 text-center text-xs text-gray-600 py-0.5' : ''}>
            {i === 2 ? '↓ f-block' : ''}
          </div>
        ))}
      </div>

      {/* Lanthanides row */}
      <div className="flex gap-0.5 mb-0.5 overflow-x-auto" style={{ minWidth: '640px' }}>
        <div className="flex-shrink-0 flex items-center justify-end pr-1" style={{ width: '16.5%' }}>
          <span className="text-[0.6rem] text-pink-400 whitespace-nowrap">Lanthanides</span>
        </div>
        <div className="flex gap-0.5 flex-1">
          {lanthanides.map(el => (
            <div key={el.number} className={`flex-1 transition-opacity ${filteredElements && el.category !== filteredElements ? 'opacity-20' : ''}`}>
              <ElementCell el={el} onClick={handleClick} selected={selected?.number === el.number} />
            </div>
          ))}
        </div>
      </div>

      {/* Actinides row */}
      <div className="flex gap-0.5 overflow-x-auto" style={{ minWidth: '640px' }}>
        <div className="flex-shrink-0 flex items-center justify-end pr-1" style={{ width: '16.5%' }}>
          <span className="text-[0.6rem] text-rose-400 whitespace-nowrap">Actinides</span>
        </div>
        <div className="flex gap-0.5 flex-1">
          {actinides.map(el => (
            <div key={el.number} className={`flex-1 transition-opacity ${filteredElements && el.category !== filteredElements ? 'opacity-20' : ''}`}>
              <ElementCell el={el} onClick={handleClick} selected={selected?.number === el.number} />
            </div>
          ))}
        </div>
      </div>

      {/* Detail panel */}
      {selected && (
        <div className="mt-6 mx-2">
          <div className={`card border-2 ${categoryColors[selected.category]?.border || 'border-gray-700'}`}>
            <div className="flex items-start gap-6 flex-wrap">
              <div className={`${categoryColors[selected.category]?.bg} rounded-xl p-4 text-center min-w-[100px]`}>
                <div className="text-sm opacity-60 mb-1">{selected.number}</div>
                <div className="text-5xl font-bold">{selected.symbol}</div>
                <div className="text-sm mt-1">{selected.name}</div>
                <div className="text-xs opacity-60 mt-1">{selected.mass} u</div>
              </div>
              <div className="flex-1 min-w-[200px]">
                <h2 className="text-2xl font-bold mb-1">{selected.name}</h2>
                <div className="flex flex-wrap gap-3 mb-3 text-sm">
                  <span className="bg-gray-800 rounded px-2 py-0.5">
                    <span className="text-gray-400">Category: </span>
                    <span className={categoryColors[selected.category]?.text}>{categoryColors[selected.category]?.label}</span>
                  </span>
                  {selected.group && (
                    <span className="bg-gray-800 rounded px-2 py-0.5">
                      <span className="text-gray-400">Group: </span>{selected.group}
                    </span>
                  )}
                  <span className="bg-gray-800 rounded px-2 py-0.5">
                    <span className="text-gray-400">Period: </span>{selected.period}
                  </span>
                  <span className="bg-gray-800 rounded px-2 py-0.5">
                    <span className="text-gray-400">Mass: </span>{selected.mass} u
                  </span>
                </div>
                <div className="bg-gray-800 rounded-lg px-3 py-2 mb-3 font-mono text-blue-300 text-sm">
                  {selected.config}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{selected.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
