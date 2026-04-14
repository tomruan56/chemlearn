const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const path = require('path')
const crypto = require('crypto')

const adapter = new FileSync(path.join(__dirname, 'db.json'))
const db = low(adapter)

// Set defaults
db.defaults({ users: [], quizAttempts: [], userProgress: [] }).write()

// Helper to generate IDs
function newId() {
  return crypto.randomBytes(8).toString('hex')
}

// User operations
const users = {
  findByEmail: email => db.get('users').find({ email }).value(),
  findByUsername: username => db.get('users').find({ username }).value(),
  findById: id => db.get('users').find({ id }).value(),
  create: ({ username, email, passwordHash }) => {
    const user = { id: newId(), username, email, passwordHash, createdAt: new Date().toISOString() }
    db.get('users').push(user).write()
    return user
  },
}

// Quiz attempt operations
const quizAttempts = {
  create: ({ userId, topic, score, total }) => {
    const attempt = { id: newId(), userId, topic, score, total, completedAt: new Date().toISOString() }
    db.get('quizAttempts').push(attempt).write()
    return attempt
  },
  byUser: userId => db.get('quizAttempts').filter({ userId }).value(),
  byUserRecent: (userId, limit = 20) =>
    db.get('quizAttempts').filter({ userId }).sortBy('completedAt').reverse().take(limit).value(),
}

// User progress operations
const userProgress = {
  find: (userId, topic) => db.get('userProgress').find({ userId, topic }).value(),
  upsert: (userId, topic, score, total) => {
    const passThreshold = Math.ceil(total * 0.7)
    const existing = userProgress.find(userId, topic)
    if (existing) {
      db.get('userProgress')
        .find({ userId, topic })
        .assign({
          attempts: existing.attempts + 1,
          bestScore: Math.max(existing.bestScore, score),
          completed: existing.completed || score >= passThreshold,
        })
        .write()
    } else {
      db.get('userProgress').push({
        id: newId(),
        userId,
        topic,
        attempts: 1,
        bestScore: score,
        completed: score >= passThreshold,
      }).write()
    }
  },
  byUser: userId => db.get('userProgress').filter({ userId }).value(),
}

module.exports = { users, quizAttempts, userProgress }
