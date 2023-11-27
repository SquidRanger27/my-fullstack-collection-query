//apiClient.ts
import request from 'superagent'
import { Cheese } from '../models/cheese'
const cheesesUrl = 'api/v1/cheeses'

// GET all cheeses

export async function getCheesesApi(): Promise<Cheese[]> {
  const response = await request.get(cheesesUrl)
  return response.body
}

// GET one cheese

export async function getOneCheeseApi(cheeseId: number) {
  const response = await request.get(`${cheesesUrl}/${cheeseId}`)
  return response.body
}

// ADD cheese

export async function addCheeseApi(cheese: Cheese) {
  const response = await request.post(cheesesUrl).send(cheese)
  return response.body
}

// DELETE cheese

export async function deleteCheeseApi(cheeseId: number) {
  const response = await request.delete(`${cheesesUrl}/${cheeseId}`)
  return response.body
}

// UPDATE cheese

export async function updateCheeseApi(cheeseId: number, updatedCheese: Cheese) {
  const response = await request
    .patch(`${cheesesUrl}/${cheeseId}`)
    .send(updatedCheese)
  return response.body
}
