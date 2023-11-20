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
    // console.log(digimons)
    res.json(digimons)
  } catch (err: any) {
    res.sendStatus(500)
    console.log(err.message)
  }
})

//POST
//NEED TO FIX TO ADD NAME AND TYPE ON INSOMNIA
router.post('/', async (req, res) => {
  const name = req.body
  console.log('hello' + name)
  if (!name) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    const digimons = await addDigimonDb(name)
    console.log('POST' + digimons)
    res.status(200).json({ digimons })
  } catch (err) {
    console.log(err)
    res.status(500).send('Could not add digimon!')
  }
})

//UPDATE
// router.patch('/:id', async (req, res) => {
//   const id = parseInt(req.params.id)
//   if (isNaN(id)) {
//     res.status(400).send('Bad Request: ID must be a number')
//     return
//   }

//   const name = req.body
//   if (!name) {
//     res.status(400).send('Bad Request: Name is required')
//     return
//   }

//   try {
//     await renameDigimonDb(id, digimon_name, digimon_type)
//     res.sendStatus(200)
//   } catch (err) {
//     console.log(err)
//     res.status(500).send('Could not rename Digimon')
//   }
// })

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
