import { Router } from 'express'
import * as db from '../db/db'

const router = Router()

router.get('/', async (req, res) => {
  res.send(await db.getAllMovies())
})

router.post('/', async (req, res) => {
  try {
    await db.addMovie(req.body)
    res.sendStatus(200)
  } catch (error) {
    res.send(error).status(400)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await db.deleteMovie(Number(req.params.id))
    res.sendStatus(200)
  } catch (error) {
    res.send(error).status(400)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    await db.updateMovie(Number(req.params.id), req.body)
    res.sendStatus(200)
  } catch (error) {
    res.send(error).status(400)
  }
})

export default router
