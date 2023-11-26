import connection from './connection'
import { Book } from '../../models/book'

export async function getAllBooksDb(db = connection): Promise<Book[]> {
  return db('books').select(
    'id',
    ' author name as authorName',
    ' book title as bookTitle',
    ' series title as seriesTitle',
    ' etry number as entryNumber'
  )
}

export async function getBookById(id: number, db = connection): Promise<Book> {
  return db('books')
    .select(
      'id',
      ' author name as authorName',
      ' book title as bookTitle',
      ' series title as seriesTitle',
      ' etry number as entryNumber'
    )
    .where('id', id)
    .first()
}
