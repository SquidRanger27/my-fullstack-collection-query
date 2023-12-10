import express from 'express'
const router = express.Router()

import { getGames } from '../db/db.ts'

router.get('/games', async (req, res) => {
  try {
    const games = await getGames()
    res.json(games)
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal Server Error')
  }
})

export default router
