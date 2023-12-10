import express from 'express'
import * as db from '../db/db.ts'
import { comics as comics } from '../../models/comics.ts'

const router = express.Router()

// -- GET all comics
// '/api/v1/comics'  <---  insomnia
router.get('/', async (req, res) => {
  try {
    const comics = await db.getAllComics()
    res.json(comics)
  } catch (err) {
    console.log(err)
    res.status(500).send('it broked, could not get comics')
  }
})

//  -- GET single comic by ID
// '/api/v1/comics/1'  <---  insomnia
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }
  try {
    const comic = await db.getComicById(id)
    res.json(comic)
  } catch (err) {
    console.log(err)
    res.status(500).send('it broked, could not get comics')
  }
})

// -- POST new comic by title and issue number
router.post('/', async (req, res) => {
  const { name, issue_number } = req.body
  if (!name) {
    return res.status(400).send('Please input a title and issue number')
  }
  try {
    const newComic = await db.addComic(name, issue_number)
    res.json(newComic)
  } catch (err) {
    console.log(err)
    res.status(500).send('failed to add comic')
  }
})

// post format:
// {
// 	"name": "",
// 	"issue_number": ""
// }

// -- DELETE a comic by ID
router.delete('/:id', async (req, res) => {
  const comicId = parseInt(req.params.id)

  if (isNaN(comicId)) {
    return res.status(400).send('could not find comic ID')
  }

  try {
    await db.deleteComic(comicId)
    res.json({ message: `comic deleted` })
  } catch (err) {
    console.error(err)
    res.status(500).send('failed to delete comic')
  }
})

// -- PUT/update comic by ID
router.patch('/:id', async (req, res) => {
  const comicId = parseInt(req.params.id)
  const { name, issue_number } = req.body

  if (isNaN(comicId)) {
    return res.status(400).send('please input a valid ID')
  }

  const updates = {} as Partial<comics>
  if (name !== undefined && typeof name === 'string') {
    updates.name = name
  }

  if (issue_number !== undefined && typeof issue_number === 'string') {
    updates.issue_number = issue_number
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).send('no updates detected')
  }

  try {
    const updatedComic = await db.updateComic(comicId, updates)

    if (updatedComic) {
      res.json(updatedComic)
    } else {
      res.status(404).send('comic not found')
    }
  } catch (err) {
    console.error(err)
    res.status(500).send('update failed')
  }
})

export default router
