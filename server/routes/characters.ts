import { Router } from 'express'
import { getCharacters } from '../db/db'

const router = Router()

router.get('', async (req, res) => {
  res.json(await getCharacters())
})

export default router
