import request from 'superagent'
import { Movie } from '../../models/Movie'

const apiRoot = 'api/v1/movies/'

export async function getAllMovies() {
  return await request.get(apiRoot)
}
export async function addMovie(movie: Movie) {
  return await request.post(apiRoot).send(movie)
}
export async function updateMovie(id: number, movie: Movie) {
  return await request.patch(apiRoot + id).send(movie)
}
export async function deleteMovie(id: number) {
  return await request.delete(apiRoot + id)
}
