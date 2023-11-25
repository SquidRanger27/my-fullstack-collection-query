import { Router } from 'express'
import * as db from '../db/connection.ts'

const router = Router()
// GET /api/v1/verse
router.get('/', async (req, res) => {
  try {
    const verses = await db.getAllVerses()
    res.json(verses)
  } catch (err) {
    res.sendStatus(500)
    console.error((err as any).message)
  }
})

export default router
