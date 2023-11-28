import { connect } from 'superagent'
import { Comics } from '../../models/comics.ts'
import connection from '../db/connection.ts'
import db from '../db/connection.ts'

export async function getAllComics(): Promise<Comics[]> {
  return db('comics').select('*')
}

export async function getComicById(id: number): Promise<Comics[]> {
  return db('comics').where({ id }).first()
}

export async function addComic(name: string, issue_number: string) {
  await db('comics').insert([{ name, issue_number }])
  return db('comics').select('*')
}

export async function deleteComic(id: number) {
  await connection('comics').where({ id }).delete()
}

// export async function updateComic(
//   id: number,
//   updates: Partial<Comics[]>
// ): Promise<Comics | undefined> {
//   try {
//     const [updatedComic] = await connection('comics')
//       .where({ id })
//       .update(updates, [id, name, issue_number])
//       .returning([id, name, issue_number])
//     return updatedComic
//   } catch (err) {
//     console.error('Could not update comic', err)
//     return undefined
//   }
// }
