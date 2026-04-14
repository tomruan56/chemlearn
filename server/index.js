const express = require('express')
const cors = require('cors')
const path = require('path')
const { router: authRouter } = require('./routes/auth')
const quizRouter = require('./routes/quiz')

const app = express()
const PORT = process.env.PORT || 3001
const isProd = process.env.NODE_ENV === 'production'

// In dev, allow Vite dev server. In prod, same origin — no CORS needed.
if (!isProd) {
  app.use(cors({ origin: 'http://localhost:5173' }))
}

app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/quiz', quizRouter)
app.get('/api/health', (_, res) => res.json({ status: 'ok' }))

// Serve React build in production
if (isProd) {
  const distPath = path.join(__dirname, '../client/dist')
  app.use(express.static(distPath))
  // SPA fallback — send index.html for any non-API route
  app.get('*', (_, res) => res.sendFile(path.join(distPath, 'index.html')))
}

app.listen(PORT, () => console.log(`ChemLearn running on http://localhost:${PORT}`))
