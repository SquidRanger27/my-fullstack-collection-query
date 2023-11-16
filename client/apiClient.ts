import request from 'superagent'
import { Book } from '../models/books'
const booksUrl = 'api/v1/books/'

export async function getBooks(): Promise<Book[]> {
  const booksResponse = await request.get(booksUrl)
  return booksResponse.body
}
