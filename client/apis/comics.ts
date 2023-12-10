import request from 'superagent'
import type { comics } from '../../models/comics'

export async function getAllComics() {
  const response = await request.get('/api/v1/comics')
  return response.body as comics[]
}

export async function addComicByName(name: string) {
  const response = await request.post('/api/v1/comics/').send({ name })
  return response.body as comics
}

export async function deleteComicById(id: number): Promise<void> {
  await request.delete(`/api/v1/comics/${id}`)
}

export async function updateComicById(
  id: number,
  updates: { name?: string; issue_number?: string }
) {
  const res = await request
    .patch(`/api/v1/comics/${id}`)
    .send(updates)
    .set('Content-Type', 'application/json')
  return res.body as comics
}
