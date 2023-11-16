import connection from './connection'
import { Book } from '../../models/books'

export async function getAllBooks(): Promise<Book[]> {
  return connection('books').select('*')
}
