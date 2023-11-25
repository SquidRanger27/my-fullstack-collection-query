import * as Path from 'node:path'
import movies from './routes/movies'
import express from 'express'

const server = express()
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use('/api/v1/movies', movies)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
