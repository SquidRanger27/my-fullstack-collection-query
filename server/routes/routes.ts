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

// Links to request.delete in client/apis/apliClient.ts
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await db.deleteItem(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete data')
  }
})

// Links to request.patch in client/apis/apliClient.ts
router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  const { genre, description, dateLent } = req.body
  if (!req.body) {
    res.status(400).send('Bad Request: Further info required!')
    return
  }

  try {
    await db.editItem(id, genre, description, dateLent)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not edit items')
  }
})

export default router
