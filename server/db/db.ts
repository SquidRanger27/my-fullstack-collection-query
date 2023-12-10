import { connect } from 'superagent'
import { comics as comics } from '../../models/comics.ts'
import connection from '../db/connection.ts'
import db from '../db/connection.ts'

export async function getAllComics(): Promise<comics[]> {
  return db('comics').select('*')
}

export async function getComicById(id: number): Promise<comics[]> {
  return db('comics').where({ id }).first()
}

export async function addComic(name: string, issue_number: string) {
  await db('comics').insert([{ name, issue_number }])
  return db('comics').select('*')
}

export async function deleteComic(id: number) {
  await connection('comics').where({ id }).delete()
}

export async function updateComic(
  id: number,
  comics: Partial<comics>
): Promise<comics | undefined> {
  try {
    const [updatedComic] = await connection('comics')
      .where({ id })
      .update(comics)
      .returning('*')

    return updatedComic as comics
  } catch (err) {
    console.error('Could not update comic', err)
    return undefined
  }
}
