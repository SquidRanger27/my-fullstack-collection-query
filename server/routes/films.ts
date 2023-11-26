import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const films = await db.getAllFilms()
    res.json(films)
  } catch (err) {
    console.log(err)
    res.status(500).send('Something went wrong')
  }
})
