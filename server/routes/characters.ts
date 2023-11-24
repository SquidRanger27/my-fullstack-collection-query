import { Router } from 'express'
import {
  getCharacters,
  deleteCharacter,
  addCharacter,
  updateCharacter,
} from '../db/db'

const router = Router()

router.get('', async (req, res) => {
  res.json(await getCharacters())
})

router.delete('', async (req, res) => {
  res.json(await deleteCharacter(req.body.id))
})

router.put('', async (req, res) => {
  res.json(await addCharacter(req.body))
})

router.patch('', async (req, res) => {
  res.json(await updateCharacter(req.body))
})

export default router
