import request from 'superagent'
import { Book, NewBook } from '../../models/book.ts'

const bookURL = '/api/v1/books'

export async function getBooksApi(): Promise<Book[]> {
  try {
    const res = await request.get(bookURL)
    return res.body
  } catch (error) {
    throw console.error('Error obtaining book.', error)
  }
}

export async function getSingleBookApi(id: number): Promise<Book> {
  try {
    const res = await request.get(`${bookURL}/${id}`)
    return res.body
  } catch (error) {
    console.error(
      `Error obtaining book of forbidden knowledge with id ${id}:`,
      error
    )
    throw new Error(
      `Failed to obtain book of forbidden knowledge with id ${id}`
    )
  }
}

export async function addBookApi(newBook: NewBook): Promise<Book> {
  const response = await request.post(bookURL).send(newBook)
  return response.body
}

export async function deleteBookApi(id: number): Promise<void> {
  await request.delete(`${bookURL}/${id}`)
}
