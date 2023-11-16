import request from 'superagent'
import { Cheese } from '../models/cheese'
const cheesesUrl = 'api/v1/cheeses'

export async function getCheesesApi(): Promise<Cheese[]> {
  const cheesesResponse = await request.get(cheesesUrl)
  console.log(cheesesResponse)
  return cheesesResponse.body
}
