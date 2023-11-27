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

// POST /api/v1/books
router.post('/', async (req, res) => {
  const newBook = req.body
  if (!req.body) {
    res.status(400).send('You do not have access to forbidden knowledge')
    return
  }
  try {
    const addNewBook = await dbBooks.addBookDb(newBook)
    res.status(200).json({ addNewBook })
  } catch (error) {
    res.status(500).send('Can not add forbidden heretical texts')
  }
})

export default router
