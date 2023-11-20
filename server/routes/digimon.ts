import express from 'express'
const router = express.Router()

import { getDigimonDb } from '../db/db'

//GET /api/v1/digimons
router.get('/', async (req, res) => {
  try {
    const digimons = await getDigimonDb()
    console.log(digimons)
    res.json(digimons)
  } catch (err: any) {
    res.sendStatus(500)
    console.log(err.message)
  }
})

export default router
