import { BookData } from '../../models/books'
import connection from './connection'

export async function getAllBooks(): Promise<BookData[]> {
  return connection('Books').select()
}