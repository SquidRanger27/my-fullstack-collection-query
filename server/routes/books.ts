import * as db from '../db/books'
import express from 'express'

const router = express.Router()

//GET /api/v1/books

router.get('/', async (req: express.Request, res: express.Response) => {
  try {
    const books = await db.getAllBooksDb()
    // console.log(books)
    res.json(books)
  } catch (error) {
    console.log(error)
    res.status(500).json({message: 'Rats! Something went wrong!'})
  }
})

//GET /api/v1/books/:id

router.get('/:id', async (req: express.Request, res: express.Response) => {
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
  }
  try {
    const book = await db.getBookByIdDb(id)
    console.log(book)
    res.json(book)
  } catch(err) {
    res.status(500).json({message: 'Rats! Something went wrong!'})
  }
})

//POST  /api/vi/books/add

router.post('/add', async (req: express.Request, res: express.Response) => {
  const newBook = req.body
  if(!req.body) {
    res.status(400).send('Bad request')
    return
  }
  try{
    console.log(req.body)
    const response = await db.insertBookDb(newBook)
    res.status(200).json({response})
  } catch (err) {
    res.status(500).json({message: 'could not add book'})
  }
})

//DELETE /api/v1/books/:id/delete

router.delete('/:id/delete', async (req: express.Request, res: express.Response) =>{
  const id = parseInt(req.params.id)
  console.log(req.body)
  if (isNaN(id)) {
    res.status(400).send('Bad Request: ID must be a number')
    return
  }

  try {
    await db.deleteBookDb(id)
    res.sendStatus(200)
  } catch (error) {
    res.status(500).send('Failed to reach DB')
  }
})

export default router