import request from 'superagent'

export async function getAllMovies() {
  const res = await request.get('/api/v1/movies')
  return res.body
}
