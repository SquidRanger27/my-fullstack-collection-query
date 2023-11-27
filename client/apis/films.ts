import request from 'superagent'
import type { Films } from '../../models/films'

export async function getAllFilms() {
  const response = await request.get('/api/v1/films')
  return response.body as Films[]
}

export async function addFilmByTitle(title: string) {
  const response = await request.post('/api/v1/films').send({ title })
  return response.body as Films
}

export async function deleteFilmById(id: number): Promise<void> {
  await request.delete(`/api/v1/films/${id}`)
}
