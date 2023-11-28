import express from 'express'

import * as db from '../db/connection'
const router = express.Router()

router.get('/', async (req, res) => {
  const movies = await db.getAllMovies()
  res.json(movies)
})

router.post('/', async (req, res) => {
  let newMovie = {"name": req.body.name, "description": req.body.description, "director": req.body.director}
  newMovie = Object.assign( {"lead_actor" : req.body.leadActor}, newMovie)
  console.log(newMovie)
  const posts = await db.addAMovie(newMovie)
  res.json(posts)
})

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const posts = await db.getAMovie(id)
  res.json(posts)
})

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const posts = await db.deleteAMovie(id)
  res.json(posts)
})
export default router