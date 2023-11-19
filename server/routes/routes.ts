import { Router } from 'express'

import * as db from '../db/db.ts'

const router = Router()

//Get v1 tasks

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()
    res.json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Rats! Somthing went wrong!' })
  }
})

// router.patch('/', async (req, res) => {
//   try {
//     const task = await db.editTask(req.body.id, req.body.details)
//     res.json(task)
//   } catch (error) {
//     console.log(error)

//     res.status(500).json({ message: 'Rats! Somthing went wrong!' })
//   }
// })
router.post('/', async (req, res) => {
  try {
    const { title, details, isStretch, colour } = req.body
    console.log(title, details)
    const addTask = await db.insertTask(title, details, isStretch, colour)
    res.json(addTask)
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: 'Rats! Somthing went wrong!' })
  }
})
export default router
