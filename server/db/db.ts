import { MovieData } from '../../models/movies.ts'
import db from './connection.ts'

export async function getAllMovies() {
  return db('movies').select('*')
}

export async function addMovie({ name, rating }: MovieData) {
  console.log('we in the db')
  return db('movies')
    .insert([{ name, personal_rating: rating }])
    .returning('*')
}
