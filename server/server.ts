import * as Path from 'node:path'
import express from 'express'
import games from './routes/games.ts'
const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/', games)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
