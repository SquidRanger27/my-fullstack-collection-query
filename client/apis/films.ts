import request from 'superagent'
import type { Films } from '../../models/films'

export async function getAllFilms() {
  const response = await request.get('/api/v1/films')
  return response.body as Films[]
}
