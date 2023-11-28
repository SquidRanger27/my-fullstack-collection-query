import connection from './connection'
import { Book, NewBook } from '../../models/book'

export async function getAllBooksDb(db = connection): Promise<Book[]> {
  return db('books').select(
    'id',
    ' authorName',
    ' bookTitle',
    ' seriesTitle',
    ' entryNumber'
  )
}

export async function getBookByIdDb(
  id: number,
  db = connection
): Promise<Book> {
  return db('books')
    .select('id', ' authorName', ' bookTitle', ' seriesTitle', ' entryNumber')
    .where('id', id)
    .first()
}

export async function addBookDb(
  newBook: NewBook,
  db = connection
): Promise<NewBook[]> {
  return await db('books').insert(newBook).returning('*')
}

export async function deleteBookDb(id: number, db = connection): Promise<void> {
  await db('books').where('id', id).delete()
}
