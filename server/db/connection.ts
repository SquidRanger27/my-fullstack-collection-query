import knexfile from './knexfile.js'
import knex from 'knex'

// type Environment = 'production' | 'test' | 'development'

// const environment = (process.env.NODE_ENV || 'development') as Environment
// const config = knexFile[environment]

const db = knex(knexfile.development)

export async function getAllVerses() {
  return db.table('verses').select('*')
}

export function close() {
  db.destroy
}
export default db
