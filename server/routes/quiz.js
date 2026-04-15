const express = require('express')
const { quizAttempts, userProgress } = require('../database')
const questions = require('../data/questions')
const { authMiddleware } = require('./auth')

const router = express.Router()

const TOPICS = ['atomic_structure', 'chemical_bonding', 'stoichiometry', 'acids_and_bases', 'chemical_reactions']
const NUM_TESTS = 10

const DIFFICULTY_LABELS = [
  '', // index 0 unused
  'Very Easy',    // 1
  'Easy',         // 2
  'Easy–Medium',  // 3
  'Medium',       // 4
  'Medium',       // 5
  'Medium–Hard',  // 6
  'Hard',         // 7
  'Hard',         // 8
  'Very Hard',    // 9
  'Expert',       // 10
]

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

// GET /api/quiz/topics
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

// GET /api/quiz/tests/:topic  — list all 10 tests with progress (optional auth)
router.get('/tests/:topic', optionalAuth, (req, res) => {
  const { topic } = req.params
  if (!TOPICS.includes(topic)) return res.status(404).json({ error: 'Topic not found' })

  // Fetch saved per-test progress for logged-in users
  const progressMap = {}
  if (req.userId) {
    const rows = userProgress.byUserTopic(req.userId, topic)
    rows.forEach(r => { progressMap[r.test] = r })
  }

  const tests = Array.from({ length: NUM_TESTS }, (_, i) => {
    const num = i + 1
    const p = progressMap[num]
    return {
      test:       num,
      label:      DIFFICULTY_LABELS[num],
      questions:  10,
      bestScore:  p ? p.bestScore : null,
      completed:  p ? p.completed : false,
    }
  })

  res.json({ topic, tests })
})

// GET /api/quiz/questions/:topic/:test  — 10 questions for a specific test (no answers)
router.get('/questions/:topic/:test', (req, res) => {
  const { topic } = req.params
  const testNum = parseInt(req.params.test, 10)

  if (!TOPICS.includes(topic)) return res.status(404).json({ error: 'Topic not found' })
  if (isNaN(testNum) || testNum < 1 || testNum > NUM_TESTS)
    return res.status(400).json({ error: 'Test number must be 1–10' })

  const topicData = questions[topic]
  if (!topicData || !topicData[testNum])
    return res.status(404).json({ error: 'Questions not found' })

  const qs = topicData[testNum].map(({ id, question, options }) => ({ id, question, options }))
  res.json({ topic, test: testNum, questions: qs })
})

// POST /api/quiz/submit  — grade answers, optionally save progress
router.post('/submit', optionalAuth, (req, res) => {
  const { topic, test: testNum, answers } = req.body

  if (!TOPICS.includes(topic))
    return res.status(400).json({ error: 'Invalid topic' })

  const t = parseInt(testNum, 10)
  if (isNaN(t) || t < 1 || t > NUM_TESTS)
    return res.status(400).json({ error: 'Invalid test number' })

  const topicData = questions[topic]
  if (!topicData || !topicData[t])
    return res.status(404).json({ error: 'Questions not found' })

  const qs = topicData[t]
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

  if (req.userId) {
    quizAttempts.create({ userId: req.userId, topic, test: t, score, total: qs.length })
    userProgress.upsert(req.userId, topic, t, score, qs.length)
  }

  res.json({ score, total: qs.length, test: t, results, saved: !!req.userId })
})

// GET /api/quiz/progress  — per-topic+test progress for logged-in user
router.get('/progress', authMiddleware, (req, res) => {
  const progress = userProgress.byUser(req.userId)
  const recentAttempts = quizAttempts.byUserRecent(req.userId, 30)
  res.json({ progress, recentAttempts })
})

module.exports = router
