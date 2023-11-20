//apiClient.ts
import request from 'superagent'
import { Cheese } from '../models/cheese'
const cheesesUrl = 'api/v1/cheeses'

export async function getCheesesApi(): Promise<Cheese[]> {
  const cheesesResponse = await request.get(cheesesUrl)
  console.log(cheesesResponse)
  return cheesesResponse.body
}

export async function addCheeseApi(cheese: Cheese) {
  const response = await request.post(cheesesUrl).send(cheese)
  return response.body
}

export async function deleteCheeseApi(cheeseId: number) {
  const response = await request.delete(`${cheesesUrl}/${cheeseId}`)
  return response.body
}

export async function updateCheeseApi(cheeseId: number, updatedCheese: Cheese) {
  const response = await request
    .patch(`${cheesesUrl}/${cheeseId}`)
    .send(updatedCheese)
  return response.body
}
