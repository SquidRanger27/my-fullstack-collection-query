import express from 'express'
import * as dbBooks from '../db/books'

const router = express.Router()

// GET /api/v1/books
router.get('/', async (req, res) => {
  try {
    const books = await dbBooks.getAllBooksDb()
    res.json(books)
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
  } catch (error) {
    console.error(error)
    res.status(500).send('The books have broken')
  }
})

// POST /api/v1/books
router.post('/', async (req, res) => {
  const newBook = req.body
  console.log(newBook)
  if (!req.body) {
    res.status(400).send('You do not have access to forbidden knowledge')
    return
  }
  try {
    const addNewBook = await dbBooks.addBookDb(newBook)
    res.status(200).json(addNewBook[0])
  } catch (error) {
    res.status(500).send('Can not add forbidden heretical texts')
  }
})

// DELETE /api/v1/books/:id
router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await dbBooks.deleteBookDb(id)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send('Could not banish heretical texts to the abyss')
  }
})

export default router
