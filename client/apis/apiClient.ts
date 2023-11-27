import request from 'superagent'

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
