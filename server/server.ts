import * as Path from 'node:path'
import products from './routes/products'
import express from 'express'


import multer from 'multer';
import path from 'path';

const server = express()


const upload = multer({ dest: 'public/' });

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


server.use('/api/v1/products',products)
export default server
