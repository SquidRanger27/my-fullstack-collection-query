import express from 'express'
import * as db from '../db/db'

const router = express.Router()

// Links to request.get in client/apis/apiClient.ts
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

// Links to request.post in client/apis/apiClient.ts
router.post('/', async (req, res) => {
  const { name, genre, description, dateLent } = req.body
  if (!req.body) {
    res.status(400).send('Bad request')
    return
  }
  try {
    const addNewItem = await db.addItem(name, genre, description, dateLent)
    res.status(200).json({ addNewItem })
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not add new items')
  }
})

export default router
