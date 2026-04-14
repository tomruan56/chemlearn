const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { users } = require('../database')

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'chem-secret-key-change-in-production'

function authMiddleware(req, res, next) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorised' })
  }
  try {
    const payload = jwt.verify(auth.slice(7), JWT_SECRET)
    req.userId = payload.userId
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' })
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' })
  }
  if (users.findByEmail(email)) {
    return res.status(409).json({ error: 'Email already in use' })
  }
  if (users.findByUsername(username)) {
    return res.status(409).json({ error: 'Username already taken' })
  }
  try {
    const passwordHash = await bcrypt.hash(password, 10)
    const user = users.create({ username, email, passwordHash })
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user.id, username: user.username, email: user.email } })
  } catch {
    res.status(500).json({ error: 'Server error' })
  }
})

router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password required' })
  }
  const user = users.findByEmail(email)
  if (!user) return res.status(401).json({ error: 'Invalid credentials' })

  const valid = await bcrypt.compare(password, user.passwordHash)
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' })

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' })
  res.json({ token, user: { id: user.id, username: user.username, email: user.email } })
})

router.get('/me', authMiddleware, (req, res) => {
  const user = users.findById(req.userId)
  if (!user) return res.status(404).json({ error: 'User not found' })
  res.json({ user: { id: user.id, username: user.username, email: user.email } })
})

module.exports = { router, authMiddleware }
