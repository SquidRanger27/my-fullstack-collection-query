import { MovieData } from '../../models/movies.ts'
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
