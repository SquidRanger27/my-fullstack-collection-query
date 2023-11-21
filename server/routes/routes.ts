import { Router } from 'express'
import * as db from '../db/db.ts'

//Calls DB functions


const router = Router()

//Get v1 tasks

router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()
    res.json(tasks)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Somthing went wrong!' })
  }
})


//POST tasks
router.post('/', async (req, res) => {
  try {
    const { title, details, isStretch, colour } = req.body
    console.log(title, details)
    const addTask = await db.insertTask(title, details, isStretch, colour)
    res.json(addTask)
  } catch (error) {
    console.log(error)

    res.status(500).json({ message: 'Somthing went wrong!' })
  }
})


//DELETE task
router.delete


// router.patch('/', async (req, res) => {
//   try {
//     const task = await db.editTask(req.body.id, req.body.details)
//     res.json(task)
//   } catch (error) {
//     console.log(error)

//     res.status(500).json({ message: 'Somthing went wrong!' })
//   }
// })

//.post to add new task





export default router
