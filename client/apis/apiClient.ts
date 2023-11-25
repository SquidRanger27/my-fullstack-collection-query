import request from 'superagent'
import { Item, NewItem } from '../../models/items'

const URL = '/api/v1/'

export async function getAllItems() {
  const response = await request.get(URL)

  return response.body as Item[]
}

export async function addItem({ name, genre, description, dateLent }: NewItem) {
  await request.post(URL).send({ name, genre, description, dateLent })
}
