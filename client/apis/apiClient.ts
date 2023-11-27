import request from 'superagent'
import { Movies } from '../../models/movies'

export async function getAllMovies() {
  const res = await request.get('/api/v1/movies')
  return res.body
}

interface AddMovie {
  name: string
  rating: number
}

export async function addMovie({ name, rating }: AddMovie): Promise<void> {
  await request.post('/api/v1/movies/add').send({ name, rating })
}

export async function deleteMovie(id: number): Promise<void> {
  await request.delete(`/api/v1/movies/delete/${id}`)
}

export async function editMovie({ name, rating, id }: Movies): Promise<void> {
  await request.patch(`/api/v1/movies/edit`).send({ name, rating, id })
}
