import knex from 'knex'
import knexfile from './knexfile'
import { Movie } from '../../models/Movie'
import db from './connection'

export async function getAllMovies() {
  return await db('movies').select()
}

export async function deleteMovie(id: number) {
  return await db('movies').delete().where('id', id)
}

export async function updateMovie(id: number, movie: Movie) {
  return await db('movies').update(movie).where('id', id)
}

export async function addMovie(movie: Movie) {
  return await db('movies').insert(movie)
}
