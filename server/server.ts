import * as Path from 'node:path'
import express from 'express'
import nzPlacesRoutes from './routes/nzplaces'
import destinationForm from './routes/destinationForm'

const UPLOADS_PATH =
  process.env.NODE_ENV === 'production'
    ? '/app/storage/uploads'
    : Path.resolve('uploads')

const server = express()
server.use(express.json())
server.use('/api/v1/nzplaces', nzPlacesRoutes)
server.use('/api/v1/nzplaces', destinationForm)
server.use('/api/v1/uploads', express.static(UPLOADS_PATH))

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
