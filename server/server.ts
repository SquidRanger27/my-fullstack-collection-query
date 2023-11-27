import * as Path from 'node:path'
import express from 'express'

import bookRoutes from './routes/books.ts'

// const __filename = URL.fileURLToPath(import.meta.url)
// const __dirname = Path.dirname(__filename)

const server = express()
server.use(express.json())

server.use('/api/v1/books', bookRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
