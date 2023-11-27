import connection from './connection'
import { Book, NewBook } from '../../models/book'

export async function getAllBooksDb(db = connection): Promise<Book[]> {
  return db('books').select(
    'id',
    ' author_name as authorName',
    ' book_title as bookTitle',
    ' series_title as seriesTitle',
    ' entry_number as entryNumber'
  )
}

export async function getBookByIdDb(
  id: number,
  db = connection
): Promise<Book> {
  return db('books')
    .select(
      'id',
      ' author_name as authorName',
      ' book_title as bookTitle',
      ' series_title as seriesTitle',
      ' entry_number as entryNumber'
    )
    .where('id', id)
    .first()
}

export async function addBookDb(
  bookObject: NewBook,
  db = connection
): Promise<NewBook[]> {
  return await db('books').insert(bookObject).returning('*')
}
