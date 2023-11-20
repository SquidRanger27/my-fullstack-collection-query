import * as Path from 'node:path'

import express from 'express'

import itemsRoute from './routes/routes'

const server = express()
server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

// Set up route
server.use('/api/v1/', itemsRoute)

export default server
