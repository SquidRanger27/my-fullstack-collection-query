import { Verse } from '../../models/verse.js'
import knexfile from './knexfile.js'
import knex from 'knex'

// type Environment = 'production' | 'test' | 'development'

// const environment = (process.env.NODE_ENV || 'development') as Environment
// const config = knexFile[environment]

const db = knex(knexfile.development)

export async function getAllVerses(): Promise<Verse[]> {
  return db('verses').select('*')
}

export async function getVerseById(id: number): Promise<Verse[]> {
  return db('verses').select('description', 'verse').where({ id }).first()
}

export async function deleteVerse(id: number): Promise<void> {
  await db('verses').where({ id }).delete()
}

export function close() {
  db.destroy
}
export default db
