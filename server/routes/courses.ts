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

router.post('/', async (req, res) => {
  const course = req.body
  console.log(course)

  try {
    const newCourse = await db.addCourseToDb(course)
    res.json(newCourse)
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

router.delete('/:id', async (req, res) => {
  const courseId = parseInt(req.params.id)
  console.log(courseId)

  try {
    await db.deleteCourseFromDb(courseId)
    res.status(200).send()
  } catch (error: any) {
    res.sendStatus(500)
    console.log(error.message)
  }
})

export default router
