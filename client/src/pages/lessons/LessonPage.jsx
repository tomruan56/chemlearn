import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { T } from '../../i18n/translations'

// ─── block renderers ──────────────────────────────────────────────────────────

function Section({ title, color, children }) {
  return (
    <section className="mb-8">
      <h2 className={`text-xl font-bold ${color} mb-3 border-b border-gray-800 pb-1`}>{title}</h2>
      {children}
    </section>
  )
}

function KeyBox({ term, children, borderColor, termColor }) {
  return (
    <div className={`bg-gray-800 border-l-4 ${borderColor} rounded-r-lg p-4 mb-3`}>
      <span className={`font-bold ${termColor}`}>{term}: </span>
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
            {headers.map(h => (
              <th key={h} className="px-2 sm:px-4 py-1.5 sm:py-2 text-left text-gray-300 border border-gray-700 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-gray-900' : 'bg-gray-800/50'}>
              {row.map((cell, j) => (
                <td key={j} className="px-2 sm:px-4 py-1.5 sm:py-2 border border-gray-700 text-gray-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Formula({ children, borderColor }) {
  return (
    <div className={`bg-gray-800 border ${borderColor} rounded-lg p-4 mb-4 font-mono text-center text-lg`}
         style={{ color: 'var(--formula-color, #e2e8f0)' }}>
      {children}
    </div>
  )
}

// Renders a structured block
function Block({ block, theme }) {
  switch (block.type) {
    case 'p':
      return <p className="text-gray-300 mb-3 leading-relaxed" dangerouslySetInnerHTML={{ __html: block.html }} />

    case 'keybox':
      return (
        <KeyBox term={block.term} borderColor={theme.border} termColor={theme.term}>
          <span dangerouslySetInnerHTML={{ __html: block.def }} />
        </KeyBox>
      )

    case 'table':
      return <Table headers={block.headers} rows={block.rows} />

    case 'formula':
      return (
        <div className={`bg-gray-800 border ${theme.border} rounded-lg p-4 mb-4 font-mono text-center text-lg ${theme.formula}`}>
          {block.text}
        </div>
      )

    case 'code': {
      return (
        <div className="bg-gray-800 rounded-lg p-4 mb-3 font-mono text-sm">
          {block.lines.map((ln, i) => (
            <p key={i} className={`${ln.color || 'text-gray-300'} ${i > 0 ? 'mt-1' : ''}`}
               dangerouslySetInnerHTML={{ __html: ln.text }} />
          ))}
        </div>
      )
    }

    case 'ul':
      return (
        <ul className="list-disc list-inside space-y-1 text-gray-300 mb-4 text-sm">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ul>
      )

    case 'ol':
      return (
        <ol className="list-decimal list-inside space-y-1 text-gray-300 mb-4 text-sm">
          {block.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
          ))}
        </ol>
      )

    case 'grid': {
      const cols = block.cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-3'
      return (
        <div className={`grid ${cols} gap-3 mb-4 text-center text-sm`}>
          {block.items.map((item, i) => (
            <div key={i} className="bg-gray-800 rounded-lg p-3">
              <div className={`font-bold ${theme.term}`} dangerouslySetInnerHTML={{ __html: item.title }} />
              {item.sub && <div className="font-mono text-yellow-300 text-xl my-1">{item.sub}</div>}
              {item.info && <div className="text-gray-400 text-xs" dangerouslySetInnerHTML={{ __html: item.info }} />}
              {item.body && <div className="text-gray-300 text-xs mt-1" dangerouslySetInnerHTML={{ __html: item.body }} />}
            </div>
          ))}
        </div>
      )
    }

    case 'twobox': {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {block.items.map((item, i) => (
            <div key={i} className={`${item.bg} border ${item.borderCol} rounded-lg p-4`}>
              <p className={`font-bold ${item.titleColor} mb-1`}>{item.title}</p>
              <p className={`text-2xl font-mono ${item.sub_color} mb-1`}>{item.sub}</p>
              <p className="text-sm text-gray-300" dangerouslySetInnerHTML={{ __html: item.body }} />
            </div>
          ))}
        </div>
      )
    }

    case 'mnemonic': {
      return (
        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4 mb-4 text-center">
          <p className="font-bold text-yellow-300 text-lg">{block.title}</p>
          {block.sub && <p className="text-yellow-200 text-sm mt-1">{block.sub}</p>}
        </div>
      )
    }

    case 'info': {
      return (
        <div className={`${block.bg || 'bg-blue-900/30'} border ${block.borderCol || theme.border} rounded-lg p-4 mb-3`}>
          {block.title && <p className={`font-semibold ${block.titleColor || theme.term} mb-1`}>{block.title}</p>}
          <p className={`font-mono text-yellow-300 text-lg text-center`}>{block.formula}</p>
          {block.note && <p className="text-sm text-gray-400 mt-2 text-center">{block.note}</p>}
        </div>
      )
    }

    default:
      return null
  }
}

// ─── Main LessonPage component ────────────────────────────────────────────────

export default function LessonPage({ data }) {
  const { lang } = useLanguage()
  const tUI = k => T[lang]?.[k] ?? T.en[k] ?? k
  const c = data[lang] || data.en  // fall back to English if vi not complete
  const { theme } = data

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link to="/lessons" className={`${theme.link} hover:opacity-80 text-sm mb-4 inline-block`}>
        {tUI('lesson_back')}
      </Link>
      <div className="flex items-center gap-3 mb-6">
        <span className="text-4xl sm:text-5xl">{data.icon}</span>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">{c.title}</h1>
          <p className="text-gray-400">{c.subtitle}</p>
        </div>
      </div>

      {c.sections.map((sec, si) => (
        <Section key={si} title={sec.title} color={theme.heading}>
          {sec.blocks.map((block, bi) => (
            <Block key={bi} block={block} theme={theme} />
          ))}
        </Section>
      ))}

      {/* Exam tips */}
      <div className="bg-green-900/30 border border-green-700 rounded-xl p-5 mt-6">
        <h3 className="font-bold text-green-400 mb-2">{tUI('lesson_exam_tips')}</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-300">
          {c.examTips.map((tip, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: tip }} />
          ))}
        </ul>
      </div>

      <div className="flex justify-between mt-8">
        <Link to="/lessons" className="btn-secondary">{tUI('lesson_back')}</Link>
        {data.quizTopic
          ? <Link to={`/quiz?topic=${data.quizTopic}`} className="btn-primary">{tUI('lesson_quiz_btn')}: {c.title} →</Link>
          : <span className="btn-secondary opacity-50 cursor-not-allowed">{tUI('lesson_quiz_coming')}</span>
        }
      </div>
    </div>
  )
}
