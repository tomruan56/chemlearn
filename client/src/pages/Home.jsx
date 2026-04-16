import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useState, useEffect } from 'react'

const features = [
  {
    icon: '⚛️',
    title: 'Interactive Periodic Table',
    description: 'Explore all 118 elements with properties, electron configurations, and detailed descriptions.',
    to: '/periodic-table',
    color: 'from-blue-900 to-blue-800',
    border: 'border-blue-700',
  },
  {
    icon: '📚',
    title: 'Topic Lessons',
    description: 'Study Atomic Structure, Chemical Bonding, Stoichiometry, Acids & Bases, and Chemical Reactions.',
    to: '/lessons',
    color: 'from-purple-900 to-purple-800',
    border: 'border-purple-700',
  },
  {
    icon: '✏️',
    title: 'Practice Quizzes',
    description: 'Test yourself with 10 difficulty-graded tests per topic (100 questions each) — from Very Easy to Expert.',
    to: '/quiz',
    color: 'from-green-900 to-green-800',
    border: 'border-green-700',
  },
  {
    icon: '⚖️',
    title: 'Equation Balancer',
    description: 'Enter any chemical equation and get it balanced step-by-step instantly.',
    to: '/balancer',
    color: 'from-orange-900 to-orange-800',
    border: 'border-orange-700',
  },
  {
    icon: '🔬',
    title: 'Reaction Library',
    description: 'Search 200+ reactions by element or compound — see balanced equations, types, conditions, and explanations.',
    to: '/reactions',
    color: 'from-teal-900 to-teal-800',
    border: 'border-teal-700',
  },
  {
    icon: '🔗',
    title: 'Reaction Chain Graph',
    description: 'Explore an interactive force-directed graph showing how every element and compound is connected through reactions.',
    to: '/reaction-graph',
    color: 'from-pink-900 to-pink-800',
    border: 'border-pink-700',
  },
]

const topics = [
  { icon: '⚛️', name: 'Atomic Structure',   to: '/lessons/atomic-structure',   color: 'text-blue-400' },
  { icon: '🔗', name: 'Chemical Bonding',   to: '/lessons/chemical-bonding',   color: 'text-purple-400' },
  { icon: '⚗️', name: 'Chemical Reactions', to: '/lessons/chemical-reactions', color: 'text-red-400' },
  { icon: '⚖️', name: 'Stoichiometry',      to: '/lessons/stoichiometry',      color: 'text-green-400' },
  { icon: '🧪', name: 'Acids & Bases',      to: '/lessons/acids-and-bases',    color: 'text-yellow-400' },
]

export default function Home() {
  const { user, token } = useAuth()
  const [progress, setProgress] = useState([])

  useEffect(() => {
    if (token) {
      fetch('/api/quiz/progress', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(r => r.json())
        .then(data => setProgress(data.progress || []))
        .catch(() => {})
    }
  }, [token])

  // progress is now per topic+test; tally passed tests per topic
  const TOTAL_TESTS = topics.length * 10   // 5 topics × 10 tests = 50
  const passedTests = progress.filter(p => p.completed).length

  const topicStats = topics.reduce((acc, t) => {
    const topicId = t.name.toLowerCase().replace(/ & /g, '_and_').replace(/ /g, '_')
    const rows = progress.filter(p => p.topic === topicId)
    acc[topicId] = {
      passed:    rows.filter(r => r.completed).length,
      attempted: rows.length,
      best:      rows.length ? Math.max(...rows.map(r => r.bestScore)) : null,
    }
    return acc
  }, {})

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10 sm:mb-14">
        <div className="text-4xl sm:text-6xl mb-3 sm:mb-4">⚗️</div>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Master High School <span className="text-blue-400">Chemistry</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8 px-2">
          Interactive lessons, quizzes, a full periodic table and equation balancer — everything you need to ace your chemistry exams.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/quiz" className="btn-primary">Start Quiz</Link>
          <Link to="/periodic-table" className="btn-secondary">Explore Periodic Table</Link>
        </div>
      </div>

      {/* Progress bar (logged-in users) */}
      {user && (
        <div className="card mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-base sm:text-lg">Your Progress</h2>
            <span className="text-xs sm:text-sm text-gray-400">{passedTests} / {TOTAL_TESTS} tests passed</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2 sm:h-3 mb-4">
            <div
              className="bg-blue-500 h-2 sm:h-3 rounded-full transition-all duration-500"
              style={{ width: `${(passedTests / TOTAL_TESTS) * 100}%` }}
            />
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3">
            {topics.map(topic => {
              const topicId = topic.name.toLowerCase().replace(/ & /g, '_and_').replace(/ /g, '_')
              const s = topicStats[topicId]
              return (
                <Link
                  key={topic.to}
                  to={`/quiz?topic=${topic.to.split('/').pop()}`}
                  className="bg-gray-800 rounded-lg p-2 sm:p-3 text-center hover:bg-gray-700 transition-colors"
                >
                  <div className="text-xl sm:text-2xl mb-1">{topic.icon}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 mb-1 leading-tight">{topic.name}</div>
                  {s.attempted > 0 ? (
                    <div className="text-[10px] sm:text-xs font-semibold text-green-400">{s.passed}/10</div>
                  ) : (
                    <div className="text-[10px] sm:text-xs text-gray-600">Not started</div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14">
        {features.map(f => (
          <Link
            key={f.to}
            to={f.to}
            className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-xl p-4 sm:p-6 hover:scale-[1.02] transition-transform duration-200 group`}
          >
            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{f.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-blue-200 transition-colors">
              {f.title}
            </h3>
            <p className="text-gray-300 text-sm">{f.description}</p>
          </Link>
        ))}
      </div>

      {/* Topic quick links */}
      <div className="mb-10">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Topics Covered</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {topics.map(t => (
            <Link
              key={t.to}
              to={t.to}
              className="bg-gray-900 border border-gray-700 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-medium hover:border-blue-500 hover:bg-gray-800 transition-all flex items-center gap-1.5 sm:gap-2"
            >
              <span>{t.icon}</span>
              <span className={t.color}>{t.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
