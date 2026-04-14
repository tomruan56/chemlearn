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
    description: 'Test your knowledge with 10 questions per topic. Track your best scores and progress.',
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

  const completedTopics = progress.filter(p => p.completed).length

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="text-6xl mb-4">⚗️</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Master High School <span className="text-blue-400">Chemistry</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
          Interactive lessons, quizzes, a full periodic table and equation balancer — everything you need to ace your chemistry exams.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/quiz" className="btn-primary text-lg px-6 py-3">Start Quiz</Link>
          <Link to="/periodic-table" className="btn-secondary text-lg px-6 py-3">Explore Periodic Table</Link>
        </div>
      </div>

      {/* Progress bar (logged-in users) */}
      {user && (
        <div className="card mb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold text-lg">Your Progress</h2>
            <span className="text-sm text-gray-400">{completedTopics} / {topics.length} topics completed</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${(completedTopics / topics.length) * 100}%` }}
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {topics.map(topic => {
              const p = progress.find(x => x.topic === topic.name.toLowerCase().replace(/ & /g, '_and_').replace(/ /g, '_'))
              return (
                <Link
                  key={topic.to}
                  to={`/quiz?topic=${topic.to.split('/').pop()}`}
                  className="bg-gray-800 rounded-lg p-3 text-center hover:bg-gray-700 transition-colors"
                >
                  <div className="text-2xl mb-1">{topic.icon}</div>
                  <div className="text-xs text-gray-400 mb-1">{topic.name}</div>
                  {p ? (
                    <div className="text-xs font-semibold text-green-400">Best: {p.best_score}/10</div>
                  ) : (
                    <div className="text-xs text-gray-600">Not started</div>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        {features.map(f => (
          <Link
            key={f.to}
            to={f.to}
            className={`bg-gradient-to-br ${f.color} border ${f.border} rounded-xl p-6 hover:scale-[1.02] transition-transform duration-200 group`}
          >
            <div className="text-4xl mb-3">{f.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
              {f.title}
            </h3>
            <p className="text-gray-300 text-sm">{f.description}</p>
          </Link>
        ))}
      </div>

      {/* Topic quick links */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Topics Covered</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {topics.map(t => (
            <Link
              key={t.to}
              to={t.to}
              className="bg-gray-900 border border-gray-700 rounded-full px-5 py-2 text-sm font-medium hover:border-blue-500 hover:bg-gray-800 transition-all flex items-center gap-2"
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
