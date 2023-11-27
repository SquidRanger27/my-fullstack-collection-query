import express from 'express'

import * as db from '../db/connection'
const router = express.Router()

router.get('/', async (req, res) => {
  const posts = await db.getAllMovies()
  res.json(posts)
})

export default router