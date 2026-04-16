import { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useLanguage } from '../context/LanguageContext'
import { T } from '../i18n/translations'

// ── static metadata ───────────────────────────────────────────────────────────
const TOPICS = [
  { id: 'atomic_structure',   name: 'Atomic Structure',   icon: '⚛️', color: 'from-blue-900 to-blue-800',    border: 'border-blue-700'   },
  { id: 'chemical_bonding',   name: 'Chemical Bonding',   icon: '🔗', color: 'from-purple-900 to-purple-800', border: 'border-purple-700' },
  { id: 'stoichiometry',      name: 'Stoichiometry',      icon: '⚖️', color: 'from-green-900 to-green-800',   border: 'border-green-700'  },
  { id: 'acids_and_bases',    name: 'Acids & Bases',      icon: '🧪', color: 'from-yellow-900 to-yellow-800', border: 'border-yellow-700' },
  { id: 'chemical_reactions', name: 'Chemical Reactions', icon: '⚗️', color: 'from-red-900 to-red-800',       border: 'border-red-700'    },
]

const DIFF_COLOR = {
  'Very Easy':   'text-green-400',
  'Easy':        'text-green-400',
  'Easy–Medium': 'text-lime-400',
  'Medium':      'text-yellow-400',
  'Medium–Hard': 'text-orange-400',
  'Hard':        'text-orange-500',
  'Very Hard':   'text-red-400',
  'Expert':      'text-red-500',
}

const DIFF_BAR_COLOR = [
  'bg-green-500','bg-green-500','bg-lime-500','bg-yellow-500','bg-yellow-500',
  'bg-orange-400','bg-orange-500','bg-orange-500','bg-red-400','bg-red-500',
]

// ── helpers ───────────────────────────────────────────────────────────────────
function ScoreBar({ score, total }) {
  const pct = (score / total) * 100
  const color = pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'
  return (
    <div className="w-full bg-gray-800 rounded-full h-2">
      <div className={`${color} h-2 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
    </div>
  )
}

function StarRating({ score, total }) {
  const pct = (score / total) * 100
  const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 40 ? 1 : 0
  return (
    <span className="text-2xl tracking-wide">
      {[1,2,3].map(i => <span key={i}>{i <= stars ? '⭐' : '☆'}</span>)}
    </span>
  )
}

// ── component ─────────────────────────────────────────────────────────────────
export default function Quiz() {
  const { token } = useAuth()
  const { lang } = useLanguage()
  const t = k => T[lang]?.[k] ?? T.en[k] ?? k
  const [searchParams] = useSearchParams()

  // phase: 'topic' | 'tests' | 'loading' | 'answering' | 'results'
  const [phase,     setPhase]     = useState('topic')
  const [topic,     setTopic]     = useState(searchParams.get('topic') || '')
  const [testNum,   setTestNum]   = useState(null)
  const [tests,     setTests]     = useState([])
  const [questions, setQuestions] = useState([])
  const [current,   setCurrent]   = useState(0)
  const [answers,   setAnswers]   = useState({})
  const [selected,  setSelected]  = useState(null)
  const [revealed,  setRevealed]  = useState(false)
  const [results,   setResults]   = useState(null)

  // load test list for a topic
  const openTopic = useCallback(async (topicId) => {
    setTopic(topicId)
    setPhase('loading')
    const headers = token ? { Authorization: `Bearer ${token}` } : {}
    try {
      const res  = await fetch(`/api/quiz/tests/${topicId}`, { headers })
      const data = await res.json()
      setTests(data.tests || [])
    } catch { setTests([]) }
    setPhase('tests')
  }, [token])

  // start a specific test
  const startTest = useCallback(async (topicId, num) => {
    setTestNum(num)
    setPhase('loading')
    setAnswers({})
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setResults(null)
    try {
      const res  = await fetch(`/api/quiz/questions/${topicId}/${num}`)
      const data = await res.json()
      setQuestions(data.questions || [])
    } catch { setQuestions([]) }
    setPhase('answering')
  }, [])

  // deep-link: ?topic=atomic_structure → jump to test list
  useEffect(() => {
    const t = searchParams.get('topic')
    if (t && TOPICS.find(x => x.id === t)) openTopic(t)
  }, []) // eslint-disable-line

  function handleSelect(idx) {
    if (revealed) return
    setSelected(idx)
  }

  function handleNext() {
    if (selected === null) return
    const newAnswers = { ...answers, [questions[current].id]: selected }
    setAnswers(newAnswers)

    if (!revealed) { setRevealed(true); return }

    if (current < questions.length - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setRevealed(false)
    } else {
      submitQuiz(newAnswers)
    }
  }

  async function submitQuiz(finalAnswers) {
    setPhase('loading')
    const headers = { 'Content-Type': 'application/json' }
    if (token) headers['Authorization'] = `Bearer ${token}`
    try {
      const res  = await fetch('/api/quiz/submit', {
        method: 'POST',
        headers,
        body: JSON.stringify({ topic, test: testNum, answers: finalAnswers }),
      })
      setResults(await res.json())
    } catch { setResults({ score: 0, total: 10, results: [] }) }
    setPhase('results')
  }

  const topicMeta = TOPICS.find(t => t.id === topic)
  const q = questions[current]

  // ── loading ────────────────────────────────────────────────────────────────
  if (phase === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">⚗️</div>
          <p className="text-gray-400">{t('quiz_loading')}</p>
        </div>
      </div>
    )
  }

  const topicNames = {
    atomic_structure:   t('topic_atomic_title'),
    chemical_bonding:   t('topic_bonding_title'),
    stoichiometry:      t('topic_stoich_title'),
    acids_and_bases:    t('topic_acids_title'),
    chemical_reactions: t('topic_reactions_title'),
  }

  // ── topic selection ────────────────────────────────────────────────────────
  if (phase === 'topic') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">{t('quiz_title')}</h1>
        <p className="text-gray-400 mb-8">
          10 {t('quiz_all_tests')} · 10 {t('quiz_questions')} · {t('quiz_difficulty')}{' '}
          <span className="text-green-400">Very Easy</span> →{' '}
          <span className="text-red-400">Expert</span>
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {TOPICS.map(tp => (
            <button
              key={tp.id}
              onClick={() => openTopic(tp.id)}
              className={`bg-gradient-to-br ${tp.color} border ${tp.border} rounded-xl p-5 text-left
                          hover:scale-[1.02] transition-transform group`}
            >
              <div className="text-3xl mb-2">{tp.icon}</div>
              <div className="font-bold text-lg text-white group-hover:text-blue-200 transition-colors">
                {topicNames[tp.id] || tp.name}
              </div>
              <div className="text-sm text-gray-400 mt-1">10 {t('quiz_all_tests')} · 100 {t('quiz_questions')}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ── test selection ─────────────────────────────────────────────────────────
  if (phase === 'tests') {
    const passedCount = tests.filter(ts => ts.completed).length

    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <button
          onClick={() => setPhase('topic')}
          className="text-gray-400 hover:text-white text-sm mb-6 flex items-center gap-1 transition-colors"
        >
          {t('quiz_back_topics')}
        </button>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">{topicMeta?.icon}</span>
          <div>
            <h1 className="text-2xl font-bold">{topicNames[topic] || topicMeta?.name}</h1>
            <p className="text-gray-400 text-sm">Test 1 = easiest · Test 10 = hardest</p>
          </div>
        </div>

        {/* difficulty gradient bar */}
        <div className="flex gap-0.5 mb-1 rounded-lg overflow-hidden">
          {DIFF_BAR_COLOR.map((c, i) => (
            <div key={i} className={`flex-1 h-2 ${c}`} title={`Test ${i+1}`} />
          ))}
        </div>
        <div className="flex justify-between text-[10px] text-gray-600 mb-6">
          <span>← Very Easy</span><span>Expert →</span>
        </div>

        {/* test grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {tests.map(ts => (
            <button
              key={ts.test}
              onClick={() => startTest(topic, ts.test)}
              className={`rounded-xl p-4 text-left border transition-all hover:bg-gray-800
                          hover:border-blue-500 group ${
                ts.completed
                  ? 'bg-gray-900 border-green-700'
                  : 'bg-gray-900 border-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-gray-500 group-hover:text-gray-400">
                  TEST {ts.test}
                </span>
                {ts.completed && <span className="text-green-400 text-xs">✓</span>}
              </div>
              <div className={`text-xs font-semibold mb-2 ${DIFF_COLOR[ts.label] ?? 'text-gray-400'}`}>
                {ts.label}
              </div>
              {ts.bestScore !== null ? (
                <>
                  <div className="text-sm font-bold text-white mb-1.5">
                    {ts.bestScore}
                    <span className="text-gray-500 text-xs font-normal">/10</span>
                  </div>
                  <ScoreBar score={ts.bestScore} total={10} />
                </>
              ) : (
                <div className="text-xs text-gray-600 mt-2">{t('quiz_not_attempted')}</div>
              )}
            </button>
          ))}
        </div>

        {/* overall progress */}
        {passedCount > 0 && (
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold">Overall Progress</span>
              <span className="text-xs text-gray-500">{passedCount} / {tests.length} tests passed</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(passedCount / tests.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>
    )
  }

  // ── results ────────────────────────────────────────────────────────────────
  if (phase === 'results' && results) {
    const { score, total, results: res } = results
    const pct = Math.round((score / total) * 100)
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="card mb-6">
          <div className="text-center mb-6">
            <div className="text-5xl mb-2">{pct >= 70 ? '🎉' : pct >= 40 ? '📚' : '💪'}</div>
            <StarRating score={score} total={total} />
            <h2 className="text-2xl font-bold mt-2 mb-1">{score} / {total} correct</h2>
            <p className="text-sm text-gray-400 mb-1">
              {pct}% &nbsp;·&nbsp; {topicMeta?.name} — Test {testNum}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              {pct >= 90 ? 'Outstanding! Perfect mastery.' :
               pct >= 70 ? 'Well done! You passed — try the next test.' :
               pct >= 40 ? 'Getting there — review and retry!' :
               'Review the explanations below, then retry.'}
            </p>
            <div className="max-w-xs mx-auto"><ScoreBar score={score} total={total} /></div>
          </div>

          {/* Review */}
          {res && res.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-300 border-t border-gray-800 pt-4">{t('quiz_review')}</h3>
              {res.map((r, i) => (
                <div
                  key={r.id}
                  className={`rounded-lg p-4 border ${
                    r.correct
                      ? 'bg-green-900/20 border-green-700'
                      : 'bg-red-900/20 border-red-700'
                  }`}
                >
                  <p className="font-medium text-sm mb-2">
                    <span className="text-gray-400">Q{i + 1}: </span>{r.question}
                  </p>
                  <div className="space-y-1 mb-2">
                    {r.options.map((opt, j) => (
                      <div key={j} className={`text-sm px-3 py-1.5 rounded ${
                        j === r.correctAnswer
                          ? 'bg-green-800/50 text-green-300 font-semibold'
                          : j === r.userAnswer && !r.correct
                            ? 'bg-red-800/50 text-red-300'
                            : 'text-gray-500'
                      }`}>
                        {j === r.correctAnswer ? '✓ ' : j === r.userAnswer && !r.correct ? '✗ ' : '  '}
                        {opt}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 italic">{r.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <button onClick={() => startTest(topic, testNum)} className="btn-primary">
            {t('quiz_retry')} {testNum}
          </button>
          {testNum < 10 && (
            <button onClick={() => startTest(topic, testNum + 1)} className="btn-primary">
              {t('quiz_next_test')} {testNum + 1} →
            </button>
          )}
          <button onClick={() => openTopic(topic)} className="btn-secondary">{t('quiz_all_tests')}</button>
          <button onClick={() => setPhase('topic')} className="btn-secondary">{t('quiz_change_topic')}</button>
        </div>
      </div>
    )
  }

  // ── answering ──────────────────────────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{topicMeta?.icon}</span>
          <div>
            <span className="font-semibold">{topicMeta?.name}</span>
            <span className="text-gray-500 text-sm ml-2">· Test {testNum}</span>
          </div>
        </div>
        <span className="text-sm text-gray-400">{current + 1} / {questions.length}</span>
      </div>

      {/* progress bar */}
      <div className="w-full bg-gray-800 rounded-full h-1.5 mb-6">
        <div
          className="bg-blue-500 h-1.5 rounded-full transition-all"
          style={{ width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* question card */}
      {q && (
        <div className="card mb-6">
          <p className="text-lg font-semibold mb-5">{q.question}</p>
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              let cls = 'quiz-option'
              if (revealed) {
                cls += idx === selected ? ' selected' : ' opacity-40'
              } else if (idx === selected) {
                cls += ' selected'
              }
              return (
                <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full
                                   border border-current text-xs mr-2 flex-shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              )
            })}
          </div>
          {revealed && (
            <p className="text-xs text-gray-600 mt-4 italic">
              Answer locked in — full review shown after the last question.
            </p>
          )}
        </div>
      )}

      <div className="flex items-center justify-between">
        <button
          onClick={() => { if (window.confirm('Quit this test? Progress will be lost.')) openTopic(topic) }}
          className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
        >
          Quit test
        </button>
        <button
          onClick={handleNext}
          disabled={selected === null}
          className={`btn-primary px-8 ${selected === null ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {!revealed
            ? t('quiz_lock_answer')
            : current < questions.length - 1
              ? 'Next →'
              : 'See Results →'}
        </button>
      </div>
    </div>
  )
}
