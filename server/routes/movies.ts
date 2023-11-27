import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await db.getAllMovies()
  res.json(response)
})

router.post('/add', async (req, res) => {
  console.log('we in the routes function')
  const { name, rating } = req.body
  const response = await db.addMovie({ name, rating })
  res.json(response)
})

export default router
