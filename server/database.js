const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const crypto = require('crypto')

const adapter = new FileSync(path.join(__dirname, 'db.json'))
const db = low(adapter)

// Set defaults
db.defaults({ users: [], quizAttempts: [], userProgress: [] }).write()

function newId() {
  return crypto.randomBytes(8).toString('hex')
}

// ── Users ─────────────────────────────────────────────────────────────────────
const users = {
  findByEmail:    email    => db.get('users').find({ email }).value(),
  findByUsername: username => db.get('users').find({ username }).value(),
  findById:       id       => db.get('users').find({ id }).value(),
  create: ({ username, email, passwordHash }) => {
    const user = { id: newId(), username, email, passwordHash, createdAt: new Date().toISOString() }
    db.get('users').push(user).write()
    return user
  },
}

// ── Quiz attempts ─────────────────────────────────────────────────────────────
const quizAttempts = {
  create: ({ userId, topic, test, score, total }) => {
    const attempt = {
      id: newId(), userId, topic,
      test: test || 1,
      score, total,
      completedAt: new Date().toISOString(),
    }
    db.get('quizAttempts').push(attempt).write()
    return attempt
  },
  byUser:       userId         => db.get('quizAttempts').filter({ userId }).value(),
  byUserRecent: (userId, n=30) =>
    db.get('quizAttempts').filter({ userId }).sortBy('completedAt').reverse().take(n).value(),
}

// ── User progress (per topic + test) ─────────────────────────────────────────
const userProgress = {
  find: (userId, topic, test) =>
    db.get('userProgress').find({ userId, topic, test }).value(),

  byUser:       userId         => db.get('userProgress').filter({ userId }).value(),
  byUserTopic:  (userId, topic) => db.get('userProgress').filter({ userId, topic }).value(),

  upsert: (userId, topic, test, score, total) => {
    const passThreshold = Math.ceil(total * 0.7)
    const existing = userProgress.find(userId, topic, test)
    if (existing) {
      db.get('userProgress')
        .find({ userId, topic, test })
        .assign({
          attempts:  existing.attempts + 1,
          bestScore: Math.max(existing.bestScore, score),
          completed: existing.completed || score >= passThreshold,
          updatedAt: new Date().toISOString(),
        })
        .write()
    } else {
      db.get('userProgress').push({
        id:        newId(),
        userId,
        topic,
        test,
        attempts:  1,
        bestScore: score,
        completed: score >= passThreshold,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      }).write()
    }
  },
}

module.exports = { users, quizAttempts, userProgress }
