import express from 'express'
import * as db from '../db/db'

const router = express.Router()

// GET all films
router.get('/', async (req, res) => {
  try {
    const films = await db.getAllFilms()
    res.json(films)
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})

// POST a new film by title
router.post('/', async (req, res) => {
  const { title } = req.body
  if (!title) {
    return res.status(400).send('Title is required')
  }

  try {
    const newFilm = await db.addFilmByTitle(title)
    res.json(newFilm)
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})

// DELETE a film by ID
router.delete('/:id', async (req, res) => {
  const filmId = parseInt(req.params.id, 10)

  if (isNaN(filmId) || filmId <= 0) {
    return res.status(400).send('Invalid film ID')
  }

  try {
    await db.deleteFilm(filmId)
    res.json({ message: `Film deleted` })
  } catch (err) {
    console.error(err)
    res.status(500).send('Something went wrong')
  }
})

export default router
