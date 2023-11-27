import { MovieData, Movies } from '../../models/movies.ts'
import db from './connection.ts'

export async function getAllMovies() {
  return db('movies').select('*')
}

export async function addMovie({ name, rating }: MovieData) {
  return db('movies')
    .insert([{ name, personal_rating: rating }])
    .returning('*')
}

export async function deleteMovie(id: number) {
  return db('movies').delete().where({ id })
}

export async function editMovie({ name, rating, id }: Movies) {
  return db('movies')
    .update({ name, personal_rating: rating })
    .where({ id })
    .returning('*')
}
