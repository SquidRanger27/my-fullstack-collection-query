import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export async function getCharacters() {
  return db.table('characters').select()
}

export function close() {
  db.destroy()
}
