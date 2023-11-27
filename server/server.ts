import * as Path from 'node:path'
import verseRoutes from './routes/verses'
import express from 'express'

const server = express()
server.use(express.json())
server.use('/api/v1/verses', verseRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
}

export default server
