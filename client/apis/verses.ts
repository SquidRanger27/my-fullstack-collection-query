import request from 'superagent'
import { type Verse } from '../../models/verse'

export async function getAllVerses(): Promise<Verse[]> {
  const response = await request.get('/api/v1/verses')
  return response.body
}
