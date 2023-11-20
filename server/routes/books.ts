import { Router } from 'express'

import * as db from '../db/books'

const router = Router()

//Get v1 Books

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    console.log(books)
    res.json(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Rats! Something went wrong!'})
  }
})

export default router