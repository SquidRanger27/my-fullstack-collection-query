//routes cheese.ts
import express from 'express'
const router = express.Router()
import * as db from '../db/db-all-cheeses.ts'

// GET /api/v1/cheeses

router.get('/', async (req, res) => {
  try {
    const cheeses = await db.getAllCheesesDb()
    res.json(cheeses)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

// GET /api/v1/cheeses/:id

router.get('/:id', async (req, res) => {
  const cheeseId = Number(req.params.id)
  try {
    const cheese = await db.getOneCheeseDb(cheeseId)
    res.json(cheese)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

//POST /api/v1/cheeses

router.post('/', async (req, res) => {
  const cheese = req.body
  try {
    const addedCheese = await db.addCheeseDb(cheese)
    res.json(addedCheese)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

//DELETE /api/v1/cheeses/:id

router.delete('/:id', async (req, res) => {
  const cheeseId = Number(req.params.id)
  try {
    await db.deleteCheeseDb(cheeseId)
    res.status(200).send()
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

//PATCH /api/v1/cheeses/:id

router.patch('/:id', async (req, res) => {
  const cheeseId = Number(req.params.id)
  const updatedCheese = req.body
  try {
    await db.updateCheeseDb(cheeseId, updatedCheese)
    res.json(updatedCheese)
    res.status(200).json({ message: 'Cheese updated successfully' })
  } catch (error: any) {
    console.error('Error updating cheese:', error.message)
    res.sendStatus(500)
  }
})

export default router
