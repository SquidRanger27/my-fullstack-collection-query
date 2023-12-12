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
  await db('comics')
    .insert([{ name, issue_number }])
    .insert({ name })
    .returning(['id', 'name', 'issue_number'])
    .then((result) => result[0])
}

export async function deleteComic(id: number) {
  await connection('comics').where({ id }).delete()
}

export async function updateComic(
  id: number,
  updates: Partial<Comics>
): Promise<Comics | undefined> {
  try {
    const [updatedComic] = await connection('comics')
      .where({ id })
      .update(updates, ['name', 'issue_number'])
      .returning(['id', 'name', 'issue_number'])

    return updatedComic as Comics
  } catch (error) {
    console.error('Could not update comic', error)
    return undefined
  }
}
