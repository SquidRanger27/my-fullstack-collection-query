import db from './connection.ts'

export async function getAllMovies() {
  return db('movies').select('*')
}
