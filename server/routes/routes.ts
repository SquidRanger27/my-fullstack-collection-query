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

router.post('/', async (req, res) => {
  const { name, item, description } = req.body
  if (!req.body) {
    res.status(400).send('Bad request: ID must be a number')
    return
  }
  try {
    const addNewItem = await db.addItem(name, item, description)
    res.status(200).json({ addNewItem })
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not add new items')
  }
})

export default router
