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
  console.log('we in the api function')
  await request.post('/api/v1/movies/add').send({ name, rating })
}
