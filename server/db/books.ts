import { Book, BookData } from '../../models/books'
import connection from './connection'

export async function getAllBooksDb(): Promise<BookData[]> {
  return await connection('Books').select()
}

export async function getBookByIdDb(id: number): Promise<BookData[]>{
  return await connection('Books').where({id}).first()
}

export async function insertBookDb(newBook: Promise<BookData[]>){
  return await connection('Books').insert(newBook).returning([
    'id',
    'title',
    'author',
    'genre'
  ])
}