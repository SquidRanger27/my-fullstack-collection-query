import * as Path from 'node:path'
import products from './routes/products'
import express from 'express'
import { displayProducts } from './db/db'
import { Router } from 'express'
const server = express()
server.use(express.json())

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

server.use('/api/v1/products',products)
export default server
