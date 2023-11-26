import express from 'express'
const router = express.Router()

import {
  addDigimonDb,
  deleteDigimonDb,
  getDigimonDb,
  renameDigimonDb,
} from '../db/db'

//GET /api/v1/digimons
router.get('/', async (req, res) => {
  try {
    const digimons = await getDigimonDb()
    console.log('SERVER:', digimons)
    res.json(digimons)
  } catch (err: any) {
    res.sendStatus(500)
    console.log(err.message)
  }
})

//POST

router.post('/', async (req, res) => {
  const { digimonName, digimonType } = req.body

  if (!req.body) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    const newDigimons = await addDigimonDb(digimonName, digimonType)
    console.log('POST' + newDigimons)
    res.status(200).json({ newDigimons })
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not add digimon!')
  }
})

//UPDATE
router.patch('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  const { digimonName, digimonType } = req.body

  console.log('Received ID:', id)
  console.log('Received Name:', digimonName)
  console.log('Received Type:', digimonType)

  if (!req.body) {
    res.status(400).send('Bad Request: Name is required')
    return
  }

  try {
    await renameDigimonDb(id, digimonName, digimonType)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not rename Digimon')
  }
})

//DELETE
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await deleteDigimonDb(id)
    res.sendStatus(200)
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not delete digimon!')
  }
})

export default router
