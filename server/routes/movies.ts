import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await db.getAllMovies()
  res.json(response)
})

router.post('/add', async (req, res) => {
  const { name, rating } = req.body
  const response = await db.addMovie({ name, rating })
  res.json(response)
})

router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params
  console.log(req.params.id)

  const response = await db.deleteMovie(Number(id))
  res.json(response)
})

export default router
