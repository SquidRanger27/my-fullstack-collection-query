import express from 'express'
import * as db from '../db/db'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const items = await db.getAllItems()
    // console.log(items)
    res.json(items)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not get items')
  }
})

export default router
