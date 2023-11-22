import * as Path from 'node:path'
import artRoutes from './routes/router'
import express from 'express'
import multer from 'multer'


const server = express()
server.use(express.json())

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, Path.resolve('../uploads/'));
  },
  filename:  

)


if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

server.use('/api/v1/artworks', artRoutes)

export default server
