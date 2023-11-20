import request from 'superagent'
import { Item } from '../../models/items'

export async function getAllItems() {
  const response = await request.get('/api/v1/')

  return response.body as Item[]
}

export async function addItem({ name, item, description }: Item) {
  await request.post('/api/v1/').send({ name, item, description })
}
