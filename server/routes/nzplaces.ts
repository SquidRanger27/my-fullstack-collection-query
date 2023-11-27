import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

//GET /api/v1/nzplaces
router.get('/', async (req, res): Promise<void> => {
  try {
    const nzPlaces = await db.getAllPlaces()
    res.json(nzPlaces)
  } catch (error) {
    console.error(error)
    res.status(500).json('There was an error trying to get places')
  }
})

//GET /api/v1/nzplaces/id
router.get('/:id', async (req, res): Promise<void> => {
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

//GET destination /api/v1/nzplaces/id/destination
router.get('/:id/destination', async (req, res): Promise<void> => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }
  try {
    const destination = await db.getDestinationForPlaces(id)
    if (!destination) {
      res.sendStatus(404)
      return
    }
    res.json(destination)
  } catch (error) {
    console.error(error)
    res.status(500).json('Could not get place')
  }
})

export default router
