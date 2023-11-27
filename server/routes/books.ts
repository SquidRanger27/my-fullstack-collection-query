import express from 'express'
import * as dbBooks from '../db/books'

const router = express.Router()

// GET /api/v1/books
router.get('/', async (req, res) => {
  try {
    const books = await dbBooks.getAllBooksDb()
    res.json(books)
    // res.send('hello, world')
  } catch (error) {
    console.error(error)
    res.status(500).send('The books have broken')
  }
})

// GET /api/v1/books/:id
router.get('/:id', async (req, res) => {
  const bookId = Number(req.params.id)
  try {
    const book = await dbBooks.getBookByIdDb(bookId)
    res.json(book)
    // res.send('hello, world')
  } catch (error) {
    console.error(error)
    res.status(500).send('The books have broken')
  }
})

export default router
