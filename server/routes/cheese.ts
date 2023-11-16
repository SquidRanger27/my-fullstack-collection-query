import express from 'express'
const router = express.Router()
import * as db from '../db/db.ts'

// GET /api/v1/books
router.get('/', async (req, res) => {
  try {
    const cheeses = await db.getAllCheeses()
    res.json({ cheeses })
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

export default router
