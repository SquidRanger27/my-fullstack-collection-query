import request from 'superagent'
import { Item } from '../../models/items'

export async function getAllItems() {
  const response = await request.get('/api/v1/')

  return response.body as Item[]
}
