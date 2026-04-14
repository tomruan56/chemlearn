const express = require('express')
const { quizAttempts, userProgress } = require('../database')
const questions = require('../data/questions')
const { authMiddleware } = require('./auth')

const router = express.Router()

const TOPICS = ['atomic_structure', 'chemical_bonding', 'stoichiometry', 'acids_and_bases', 'chemical_reactions']

router.get('/topics', (req, res) => {
  res.json({
    topics: [
      { id: 'atomic_structure',   name: 'Atomic Structure',   icon: '⚛️', color: 'blue' },
      { id: 'chemical_bonding',   name: 'Chemical Bonding',   icon: '🔗', color: 'purple' },
      { id: 'stoichiometry',      name: 'Stoichiometry',      icon: '⚖️', color: 'green' },
      { id: 'acids_and_bases',    name: 'Acids & Bases',      icon: '🧪', color: 'yellow' },
      { id: 'chemical_reactions', name: 'Chemical Reactions', icon: '⚗️', color: 'red' },
    ]
  })
})

router.get('/questions/:topic', (req, res) => {
  const { topic } = req.params
  if (!TOPICS.includes(topic)) {
    return res.status(404).json({ error: 'Topic not found' })
  }
  const qs = questions[topic].map(({ id, question, options }) => ({ id, question, options }))
  res.json({ questions: qs })
})

// Optional auth — scores saved only when logged in
function optionalAuth(req, res, next) {
  const auth = req.headers.authorization
  if (auth && auth.startsWith('Bearer ')) {
    try {
      const jwt = require('jsonwebtoken')
      const JWT_SECRET = process.env.JWT_SECRET || 'chem-secret-key-change-in-production'
      const payload = jwt.verify(auth.slice(7), JWT_SECRET)
      req.userId = payload.userId
    } catch { /* ignore */ }
  }
  next()
}

router.post('/submit', optionalAuth, (req, res) => {
  const { topic, answers } = req.body
  if (!TOPICS.includes(topic)) {
    return res.status(400).json({ error: 'Invalid topic' })
  }

  const qs = questions[topic]
  let score = 0
  const results = qs.map(q => {
    const userAnswer = answers[q.id]
    const correct = userAnswer === q.answer
    if (correct) score++
    return {
      id: q.id,
      question: q.question,
      options: q.options,
      userAnswer,
      correctAnswer: q.answer,
      correct,
      explanation: q.explanation,
    }
  })

  // Save progress only if authenticated
  if (req.userId) {
    quizAttempts.create({ userId: req.userId, topic, score, total: qs.length })
    userProgress.upsert(req.userId, topic, score, qs.length)
  }

  res.json({ score, total: qs.length, results, saved: !!req.userId })
})

router.get('/progress', authMiddleware, (req, res) => {
  const progress = userProgress.byUser(req.userId)
  const recentAttempts = quizAttempts.byUserRecent(req.userId, 20)
  res.json({ progress, recentAttempts })
})

module.exports = router
