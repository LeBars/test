import { server } from './backend'

server.post('/feedback/', (req, res) => {
  res.json({ ok: 1 })
})