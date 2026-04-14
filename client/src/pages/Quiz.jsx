import { useState, useEffect, useCallback } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const TOPICS = [
  { id: 'atomic_structure',   name: 'Atomic Structure',   icon: '⚛️', color: 'from-blue-900 to-blue-800',    border: 'border-blue-700' },
  { id: 'chemical_bonding',   name: 'Chemical Bonding',   icon: '🔗', color: 'from-purple-900 to-purple-800', border: 'border-purple-700' },
  { id: 'stoichiometry',      name: 'Stoichiometry',      icon: '⚖️', color: 'from-green-900 to-green-800',   border: 'border-green-700' },
  { id: 'acids_and_bases',    name: 'Acids & Bases',      icon: '🧪', color: 'from-yellow-900 to-yellow-800', border: 'border-yellow-700' },
  { id: 'chemical_reactions', name: 'Chemical Reactions', icon: '⚗️', color: 'from-red-900 to-red-800',       border: 'border-red-700' },
]

function ScoreBar({ score, total }) {
  const pct = (score / total) * 100
  const color = pct >= 70 ? 'bg-green-500' : pct >= 40 ? 'bg-yellow-500' : 'bg-red-500'
  return (
    <div className="w-full bg-gray-800 rounded-full h-3">
      <div className={`${color} h-3 rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
    </div>
  )
}

export default function Quiz() {
  const { user, token } = useAuth()
  const [searchParams] = useSearchParams()
  const [phase, setPhase] = useState('select') // select | loading | answering | results
  const [topic, setTopic] = useState(searchParams.get('topic') || '')
  const [questions, setQuestions] = useState([])
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({}) // { [questionId]: optionIndex }
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)
  const [results, setResults] = useState(null)

  const startQuiz = useCallback(async (topicId) => {
    setTopic(topicId)
    setPhase('loading')
    setAnswers({})
    setCurrent(0)
    setSelected(null)
    setRevealed(false)
    setResults(null)
    const res = await fetch(`/api/quiz/questions/${topicId}`)
    const data = await res.json()
    setQuestions(data.questions)
    setPhase('answering')
  }, [])

  useEffect(() => {
    const t = searchParams.get('topic')
    if (t && TOPICS.find(x => x.id === t)) startQuiz(t)
  }, []) // eslint-disable-line

  function handleSelect(idx) {
    if (revealed) return
    setSelected(idx)
  }

  function handleNext() {
    if (selected === null) return
    const newAnswers = { ...answers, [questions[current].id]: selected }
    setAnswers(newAnswers)

    if (!revealed) {
      setRevealed(true)
      return
    }

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
    const res = await fetch('/api/quiz/submit', {
      method: 'POST',
      headers,
      body: JSON.stringify({ topic, answers: finalAnswers }),
    })
    const data = await res.json()
    setResults(data)
    setPhase('results')
  }

  const topicMeta = TOPICS.find(t => t.id === topic)
  const q = questions[current]

  if (phase === 'select') {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-2">Practice Quizzes</h1>
        <p className="text-gray-400 mb-8">10 questions per topic. Select a topic to begin.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {TOPICS.map(t => (
            <button
              key={t.id}
              onClick={() => startQuiz(t.id)}
              className={`bg-gradient-to-br ${t.color} border ${t.border} rounded-xl p-5 text-left hover:scale-[1.02] transition-transform group`}
            >
              <div className="text-3xl mb-2">{t.icon}</div>
              <div className="font-bold text-lg text-white group-hover:text-blue-200 transition-colors">{t.name}</div>
              <div className="text-sm text-gray-400 mt-1">10 questions · Multiple choice</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (phase === 'loading') {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="text-4xl mb-4 animate-bounce">⚗️</div>
          <p className="text-gray-400">Loading questions…</p>
        </div>
      </div>
    )
  }

  if (phase === 'results') {
    const { score, total, results: res, saved } = results
    const pct = Math.round((score / total) * 100)
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <div className="card mb-6">
          <div className="text-center mb-6">
            <div className="text-5xl mb-3">
              {pct >= 70 ? '🎉' : pct >= 40 ? '📚' : '💪'}
            </div>
            <h2 className="text-2xl font-bold mb-1">{score} / {total} correct</h2>
            <p className="text-gray-400 text-sm mb-3">{pct}% &nbsp;·&nbsp; {pct >= 70 ? 'Well done!' : pct >= 40 ? 'Keep studying!' : 'More practice needed'}</p>
            <div className="max-w-sm mx-auto"><ScoreBar score={score} total={total} /></div>
          </div>

          {/* Login prompt hidden temporarily */}

          {res && res.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-300">Review</h3>
              {res.map((r, i) => (
                <div key={r.id} className={`rounded-lg p-4 border ${r.correct ? 'bg-green-900/20 border-green-700' : 'bg-red-900/20 border-red-700'}`}>
                  <p className="font-medium text-sm mb-2">
                    <span className="text-gray-400">Q{i + 1}: </span>{r.question}
                  </p>
                  <div className="space-y-1 mb-2">
                    {r.options.map((opt, j) => (
                      <div key={j} className={`text-sm px-3 py-1.5 rounded ${
                        j === r.correctAnswer ? 'bg-green-800/50 text-green-300 font-semibold' :
                        j === r.userAnswer && !r.correct ? 'bg-red-800/50 text-red-300' : 'text-gray-400'
                      }`}>
                        {j === r.correctAnswer ? '✓ ' : j === r.userAnswer && !r.correct ? '✗ ' : '  '}{opt}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 italic">{r.explanation}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-3 justify-center">
          <button onClick={() => startQuiz(topic)} className="btn-primary">Try Again</button>
          <button onClick={() => setPhase('select')} className="btn-secondary">Other Topics</button>
        </div>
      </div>
    )
  }

  // answering phase
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{topicMeta?.icon}</span>
          <span className="font-semibold">{topicMeta?.name}</span>
        </div>
        <span className="text-sm text-gray-400">
          {current + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-800 rounded-full h-1.5 mb-6">
        <div
          className="bg-blue-500 h-1.5 rounded-full transition-all"
          style={{ width: `${((current + (revealed ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="card mb-6">
        <p className="text-lg font-semibold mb-5">{q.question}</p>
        <div className="space-y-3">
          {q.options.map((opt, idx) => {
            let cls = 'quiz-option'
            if (revealed) {
              if (idx === results?.results?.[current]?.correctAnswer) cls += ' correct'
              else if (idx === selected) cls += ' incorrect'
              else cls += ' opacity-50'
            } else if (idx === selected) {
              cls += ' selected'
            }
            return (
              <button key={idx} className={cls} onClick={() => handleSelect(idx)}>
                <span className="inline-block w-6 h-6 rounded-full border border-current text-xs flex items-center justify-center mr-2 flex-shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                {opt}
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={selected === null}
          className={`btn-primary px-8 ${selected === null ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {!revealed ? 'Check Answer' : current < questions.length - 1 ? 'Next →' : 'See Results →'}
        </button>
      </div>
    </div>
  )
}
