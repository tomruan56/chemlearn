import { useRef, useState, useMemo, useCallback, useEffect } from 'react'
import ForceGraph2D from 'react-force-graph-2d'
import { reactions } from '../data/reactions'
import { useLanguage } from '../context/LanguageContext'
import { T } from '../i18n/translations'

// ─── reaction-type → colour ───────────────────────────────────────────────────
const TYPE_COLOR = {
  'Synthesis':                      '#3b82f6',
  'Decomposition':                  '#f97316',
  'Single Displacement':            '#22c55e',
  'Single Displacement (Thermite)': '#22c55e',
  'Double Displacement':            '#a855f7',
  'Combustion':                     '#ef4444',
  'Combustion / Oxidation':         '#ef4444',
  'Synthesis / Combustion':         '#ef4444',
  'Combustion / Respiration':       '#ef4444',
  'Neutralisation':                 '#eab308',
  'Precipitation':                  '#14b8a6',
  'Redox (Titration)':              '#ec4899',
}
const tc = (t) => TYPE_COLOR[t] ?? '#6b7280'

const FILTER_TYPES = [
  'Synthesis', 'Decomposition', 'Single Displacement',
  'Double Displacement', 'Combustion', 'Neutralisation', 'Precipitation',
]

// ─── equation parser ──────────────────────────────────────────────────────────
// Returns { reactants: string[], products: string[] }
function parseSides(eq) {
  const arrow = eq.indexOf('→')
  if (arrow === -1) return { reactants: [], products: [] }

  // Strip leading coefficient (digits before first capital letter or '(')
  const stripCoeff = (s) => s.trim().replace(/^[^A-Z(]*/, '').trim()

  const side = (str) =>
    str.split('+')
       .map(stripCoeff)
       .filter(x => x.length > 0 && x !== '↑' && x !== '↓')

  return {
    reactants: side(eq.slice(0, arrow)),
    products:  side(eq.slice(arrow + 1)),
  }
}

// ─── graph builder ─────────────────────────────────────────────────────────────
// Nodes  = unique compound/element formulas
// Edges  = directed "reactant → product" per reaction (deduplicated by pair)
function buildGraph(list) {
  const nodeRxns = new Map()   // formula → Set<reaction>
  const linkMap  = new Map()   // 'src||tgt' → { source, target, reactions: Set }

  const touch = (id) => { if (!nodeRxns.has(id)) nodeRxns.set(id, new Set()) }

  list.forEach(r => {
    const { reactants, products } = parseSides(r.equation)
    if (!reactants.length || !products.length) return

    ;[...reactants, ...products].forEach(id => {
      touch(id)
      nodeRxns.get(id).add(r)
    })

    reactants.forEach(src => {
      products.forEach(tgt => {
        if (src === tgt) return
        const key = `${src}||${tgt}`
        if (!linkMap.has(key)) linkMap.set(key, { source: src, target: tgt, rxns: new Set() })
        linkMap.get(key).rxns.add(r)
      })
    })
  })

  const nodes = Array.from(nodeRxns.entries()).map(([id, rxns]) => ({
    id,
    reactions: [...rxns],
    degree: rxns.size,
  }))

  const links = Array.from(linkMap.values()).map(l => ({
    source: l.source,
    target: l.target,
    reactions: [...l.rxns],
  }))

  return { nodes, links }
}

// ─── component ────────────────────────────────────────────────────────────────
export default function ReactionGraph() {
  const fgRef   = useRef()
  const wrapRef = useRef()
  const [dims,       setDims]       = useState({ w: 800, h: 600 })
  const [typeFilter, setTypeFilter] = useState('all')
  const [search,     setSearch]     = useState('')
  const [selected,   setSelected]   = useState(null)
  const [hovered,    setHovered]    = useState(null)
  const { lang } = useLanguage()
  const t = k => T[lang]?.[k] ?? T.en[k] ?? k
  const [ready,      setReady]      = useState(false)

  // ── responsive canvas size ─────────────────────────────────────────────────
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const obs = new ResizeObserver(() =>
      setDims({ w: el.clientWidth, h: el.clientHeight })
    )
    obs.observe(el)
    setDims({ w: el.clientWidth, h: el.clientHeight })
    return () => obs.disconnect()
  }, [])

  // ── filter reactions ───────────────────────────────────────────────────────
  const filteredRxns = useMemo(
    () => typeFilter === 'all' ? reactions : reactions.filter(r => r.type === typeFilter),
    [typeFilter]
  )

  const graphData = useMemo(() => {
    setReady(false)
    return buildGraph(filteredRxns)
  }, [filteredRxns])

  // ── search highlight ───────────────────────────────────────────────────────
  const { hlNodes, hlLinks } = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return { hlNodes: new Set(), hlLinks: new Set() }

    const hn = new Set(
      graphData.nodes
        .filter(n => n.id.toLowerCase().includes(q))
        .map(n => n.id)
    )
    // also highlight links touching those nodes
    const hl = new Set(
      graphData.links.filter(l => {
        const s = typeof l.source === 'object' ? l.source.id : l.source
        const t = typeof l.target === 'object' ? l.target.id : l.target
        return hn.has(s) || hn.has(t)
      })
    )
    return { hlNodes: hn, hlLinks: hl }
  }, [search, graphData])

  const maxDeg = useMemo(
    () => Math.max(1, ...graphData.nodes.map(n => n.degree)),
    [graphData]
  )

  // ── node drawing ───────────────────────────────────────────────────────────
  const drawNode = useCallback((node, ctx, scale) => {
    const r = 3 + (node.degree / maxDeg) * 12    // 3 – 15 px radius
    const isEl  = /^[A-Z][a-z]?$/.test(node.id)
    const isSel = selected?.id === node.id
    const isHov = hovered?.id === node.id
    const isHl  = hlNodes.has(node.id)

    // pick fill colour
    let fill = isEl ? '#fbbf24' : '#38bdf8'
    if (isSel)       fill = '#f472b6'
    else if (isHov)  fill = '#818cf8'
    else if (isHl)   fill = '#a78bfa'

    // glow ring
    if (isSel || isHov || isHl) {
      ctx.beginPath()
      ctx.arc(node.x, node.y, r + 5, 0, Math.PI * 2)
      ctx.fillStyle = fill + '35'
      ctx.fill()
    }

    // main circle
    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.fillStyle = fill
    ctx.fill()

    // label – visible when zoomed in, highlighted, or node is large
    if (r > 7 || scale > 2 || isSel || isHov || isHl) {
      const fs = Math.max(3, Math.min(11, r * 0.85))
      ctx.font = `${fs}px monospace`
      ctx.fillStyle = '#ffffffcc'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'
      ctx.fillText(node.id, node.x, node.y + r + 1.5)
    }
  }, [selected, hovered, hlNodes, maxDeg])

  // hit area (slightly larger than drawn node)
  const paintArea = useCallback((node, color, ctx) => {
    const r = 3 + (node.degree / maxDeg) * 12 + 5
    ctx.beginPath()
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }, [maxDeg])

  // ── link colour ────────────────────────────────────────────────────────────
  const linkColorFn = useCallback((link) => {
    const s = typeof link.source === 'object' ? link.source.id : link.source
    const t = typeof link.target === 'object' ? link.target.id : link.target

    if (selected && (s === selected.id || t === selected.id))
      return '#f472b6bb'
    if (hlLinks.has(link) || (hlNodes.size && (hlNodes.has(s) || hlNodes.has(t))))
      return '#a78bfabb'

    return tc(link.reactions[0]?.type) + '66'
  }, [selected, hlLinks, hlNodes])

  // ── interaction ────────────────────────────────────────────────────────────
  const onNodeClick = useCallback((node) => {
    setSelected(prev => prev?.id === node.id ? null : node)
    fgRef.current?.centerAt(node.x, node.y, 600)
    fgRef.current?.zoom(3, 600)
  }, [])

  const onNodeHover = useCallback((node) => setHovered(node || null), [])

  const fitAll = () => fgRef.current?.zoomToFit(500, 60)

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <div className="flex flex-col" style={{ height: 'calc(100dvh - 48px)' }}>

      {/* ── Toolbar ── */}
      <div className="bg-gray-900 border-b border-gray-800 px-3 py-2 flex flex-wrap items-center gap-2 z-10 flex-shrink-0">
        <span className="text-base">🔗</span>
        <span className="font-bold text-white text-sm hidden sm:inline">{t('rg_title')}</span>
        <span className="text-gray-700 hidden sm:inline">|</span>

        {/* search */}
        <input
          className="bg-gray-800 border border-gray-700 rounded px-2 py-1 text-xs font-mono text-white
                     placeholder-gray-500 w-28 sm:w-36 focus:outline-none focus:border-blue-500"
          placeholder="Search formula…"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {/* type filter */}
        <button
          onClick={() => setTypeFilter('all')}
          className={`px-2 py-0.5 rounded text-xs border transition-colors ${
            typeFilter === 'all'
              ? 'bg-gray-600 border-gray-500 text-white'
              : 'bg-gray-800 border-gray-700 text-gray-400 hover:text-white'
          }`}
        >All</button>

        {FILTER_TYPES.map(t => (
          <button
            key={t}
            onClick={() => setTypeFilter(f => f === t ? 'all' : t)}
            className="px-2 py-0.5 rounded text-xs border transition-colors"
            style={typeFilter === t
              ? { background: tc(t) + '33', borderColor: tc(t), color: tc(t) }
              : { background: '#1f2937', borderColor: '#374151', color: '#9ca3af' }
            }
          >{t}</button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <span className="text-xs text-gray-500">
            {graphData.nodes.length} nodes · {graphData.links.length} edges
          </span>
          <button
            onClick={fitAll}
            className="px-2 py-0.5 rounded text-xs border border-gray-700 bg-gray-800
                       text-gray-300 hover:text-white transition-colors"
          >Fit view</button>
        </div>
      </div>

      {/* ── Graph + Sidebar ── */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* canvas container */}
        <div ref={wrapRef} className="flex-1 relative min-w-0 bg-gray-950">

          {dims.w > 0 && (
            <ForceGraph2D
              ref={fgRef}
              graphData={graphData}
              width={dims.w}
              height={dims.h}
              backgroundColor="#111827"
              nodeCanvasObject={drawNode}
              nodeCanvasObjectMode={() => 'replace'}
              nodePointerAreaPaint={paintArea}
              nodeLabel={node => `${node.id}  (${node.degree} reaction${node.degree !== 1 ? 's' : ''})`}
              linkColor={linkColorFn}
              linkDirectionalArrowLength={4}
              linkDirectionalArrowRelPos={1}
              linkWidth={1.2}
              onNodeClick={onNodeClick}
              onNodeHover={onNodeHover}
              onEngineStop={() => setReady(true)}
              cooldownTicks={250}
              d3AlphaDecay={0.018}
              d3VelocityDecay={0.28}
            />
          )}

          {/* loading overlay */}
          {!ready && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-gray-500 text-sm animate-pulse">Laying out graph…</div>
            </div>
          )}

          {/* hint */}
          {ready && !selected && (
            <p className="absolute top-3 right-4 text-xs text-gray-600 pointer-events-none">
              Click a node to see its reactions
            </p>
          )}

          {/* legend */}
          <div className="absolute bottom-4 left-4 bg-gray-950/85 backdrop-blur-sm rounded-xl p-3
                          text-xs border border-gray-800 pointer-events-none">
            <p className="font-semibold text-gray-300 mb-2">Legend</p>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#fbbf24' }}/>
              <span className="text-gray-400">Element</span>
            </div>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: '#38bdf8' }}/>
              <span className="text-gray-400">Compound</span>
            </div>
            {FILTER_TYPES.map(t => (
              <div key={t} className="flex items-center gap-2 mb-0.5">
                <span className="w-8 h-0.5 rounded flex-shrink-0" style={{ background: tc(t) }}/>
                <span className="text-gray-500">{t}</span>
              </div>
            ))}
            <p className="text-gray-700 mt-2 text-[10px]">Node size = reaction count</p>
          </div>
        </div>

        {/* ── sidebar — desktop: right panel; mobile: bottom sheet ── */}
        {selected && (
          <>
            {/* Mobile bottom sheet */}
            <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-gray-900 border-t border-gray-800
                            rounded-t-2xl shadow-2xl max-h-[50vh] overflow-y-auto">
              <div className="sticky top-0 bg-gray-900 flex items-center justify-between px-4 pt-3 pb-2 border-b border-gray-800/60">
                <div>
                  <span className="font-mono text-lg font-bold text-white break-all">{selected.id}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    {/^[A-Z][a-z]?$/.test(selected.id) ? '⚡ element' : '🧪 compound'}
                    {' · '}{selected.reactions?.length ?? 0} reactions
                  </span>
                </div>
                <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-white text-2xl leading-none ml-3">×</button>
              </div>
              <div className="p-3 space-y-2">
                {(selected.reactions ?? []).map(r => (
                  <div key={r.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700/60">
                    <p className="font-mono text-xs text-white mb-2 leading-snug">{r.equation}</p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-xs px-2 py-0.5 rounded-full border font-medium"
                        style={{ background: tc(r.type) + '22', borderColor: tc(r.type), color: tc(r.type) }}
                      >{r.type}</span>
                      {r.conditions && <span className="text-xs text-gray-600">{r.conditions}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop right panel */}
            <div className="hidden sm:block w-72 flex-shrink-0 bg-gray-900 border-l border-gray-800 overflow-y-auto">
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h2 className="font-mono text-2xl font-bold text-white break-all leading-snug">{selected.id}</h2>
                  <button onClick={() => setSelected(null)} className="text-gray-500 hover:text-white text-xl ml-2 flex-shrink-0 mt-0.5">×</button>
                </div>
                <p className="text-xs text-gray-500 mb-4">
                  {/^[A-Z][a-z]?$/.test(selected.id) ? '⚡ Pure element' : '🧪 Compound'}
                  {' · '}{selected.reactions?.length ?? 0} reaction{selected.reactions?.length !== 1 ? 's' : ''}
                </p>
                <div className="space-y-2">
                  {(selected.reactions ?? []).map(r => (
                    <div key={r.id} className="bg-gray-800 rounded-lg p-3 border border-gray-700/60">
                      <p className="font-mono text-xs text-white mb-2 leading-snug">{r.equation}</p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs px-2 py-0.5 rounded-full border font-medium"
                          style={{ background: tc(r.type) + '22', borderColor: tc(r.type), color: tc(r.type) }}
                        >{r.type}</span>
                        {r.conditions && <span className="text-xs text-gray-600">{r.conditions}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
