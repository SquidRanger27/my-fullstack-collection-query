import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET /api/v1/nzplaces
router.get('/', async (req, res) => {
  try {
    const nzPlaces = await db.getAllPlaces()
    res.json(nzPlaces)
  } catch (error) {
    console.error(error)
    res.status(500).json('There was an error trying to get places')
  }
})

//GET /api/v1/nzplaces/id
router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }
  try {
    const singlePlace = await db.getPlaceById(id)
    if (!singlePlace) {
      res.sendStatus(404)
      return
    }
    res.json(singlePlace)
  } catch (error) {
    console.error(error)
    res.status(500).json('Could not get place')
  }
})

//POST /api/v1/nzplaces
router.post('/', async (req, res) => {
  const { name, description } = req.body
  if (!name || !description) {
    res.status(400).send('Bad Request: Name and Description is required')
    return
  }
  try {
    const newPlace = await db.addPlace(name, description)
    res.status(200).json(newPlace)
  } catch (error) {
    console.log(error)
    res.status(500).send('Could not add place')
  }
})

//DELETE /api/v1/nzplaces/id
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }
  try {
    await db.deletePlaceById(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).send('Could not delete place')
  }
})

//PATCH /api/v1/nzplaces/id
router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }
  const { name, description } = req.body
  if (!name || !description) {
    res.status(400).send('Bad Request: Name and Description is required')
    return
  }
  try {
    await db.updatePlace(id, name, description)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).send('Could not edit place')
  }
})

export default router
