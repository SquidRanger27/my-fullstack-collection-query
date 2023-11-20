//routes cheese.ts
import express from 'express'
import { Router } from 'express'
const router = express.Router()
import * as db from '../db/db.ts'

// GET /api/v1/cheeses
router.get('/', async (req, res) => {
  try {
    const cheeses = await db.getAllCheeses()
    res.json(cheeses)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

//POST /api/v1/cheeses
router.post('/', async (req, res) => {
  try {
    const cheese = req.body
    const addedCheese = await db.addCheeseToDb(cheese)
    res.json(addedCheese)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

//DELETE /api/v1/cheeses
router.delete('/:id', async (req, res) => {
  const cheeseId = Number(req.params.id)
  try {
    await db.deleteCheeseFromDb(cheeseId)
    res.status(200).send()
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

//PATCH /api/v1/cheeses
router.patch('/:id', async (req, res) => {
  const cheeseId = Number(req.params.id)

  try {
    const updatedCheese = req.body
    await db.updateCheeseInDb(cheeseId, updatedCheese)
    res.status(200).json({ message: 'Cheese updated successfully' })
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

export default router
