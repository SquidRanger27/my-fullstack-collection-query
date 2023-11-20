import request from "superagent"
import { response } from 'express'

export async function getAllPlaces() {
  const AllPlaces = await request.get('/api/v1/nzplaces')
  console.log(AllPlaces)
return AllPlaces.body
}