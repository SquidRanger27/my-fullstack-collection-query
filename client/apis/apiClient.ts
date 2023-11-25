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

export async function deleteItem({ id }: Item) {
  await request.delete(URL + `${id}`)
}

interface EditItems {
  id: Item['id']
  newGenre: Item['genre']
  newDescription: Item['description']
  newDateLent: Item['dateLent']
}

export async function editItem({
  id,
  newGenre,
  newDescription,
  newDateLent,
}: EditItems) {
  await request.patch(URL + `${id}`).send({
    genre: newGenre,
    description: newDescription,
    dateLent: newDateLent,
  })
}
