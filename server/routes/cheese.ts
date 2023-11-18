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

export default router
