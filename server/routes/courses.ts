import express from 'express'
const router = express.Router()
import * as db from '../db/db.ts'

// First get function

router.get('/', async (req, res) => {
  try {
    const courses = await db.getAllCourses()
    res.json(courses)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

export default router
