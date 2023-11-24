import * as Path from 'node:path'

import express from 'express'
import characters from './routes/characters'

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/api/v1/characters', characters)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
