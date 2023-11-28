import request from 'superagent'
import type { Comics } from '../../models/comics'

export async function getAllFilms() {
  const response = await request.get('/api/v1/films')
  return response.body as Comics[]
}

export async function addFilmByTitle(name: string) {
  const response = await request.post('/api/v1/comics/').send({ name })
  return response.body as Comics
}

export async function deleteFilmById(id: number): Promise<void> {
  await request.delete(`/api/v1/comics/${id}`)
}

export async function updateFilmById(
  id: number,
  updates: { name?: string; issue_number?: string }
): Promise<void> {
  await request
    .patch(`/api/v1/comics/${id}`)
    .send(updates)
    .set('Content-Type', 'application/json')
}
