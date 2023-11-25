import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  res.send('a okay')
})

router.delete('/', async (req, res) => {})

router.put('/', async (req, res) => {})

router.patch('/', async (req, res) => {})

export default router
