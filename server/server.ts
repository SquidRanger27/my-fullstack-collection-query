import * as Path from 'node:path'
import products from './routes/products'
import admin from './routes/admin'
import express from 'express'
import path from 'path';

const server = express()




// Use express.static to serve static files from the 'public' folder
const publicFolder = path.resolve('public');
server.use(express.static(publicFolder));

if (process.env.NODE_ENV === 'production') {
  
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

// server.use(express.urlencoded({extended:true}))

server.use('/api/v1/products',products)
server.use('/api/v1/admin',admin)

export default server
