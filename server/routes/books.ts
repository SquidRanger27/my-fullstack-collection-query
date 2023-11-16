import express from 'express'
const router = express.Router()
import * as db from '../db/db.ts'

// GET /api/v1/books
router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    res.json({ books })
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

export default router
