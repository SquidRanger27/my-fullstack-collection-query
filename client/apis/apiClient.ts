import request from 'superagent'
import { response } from 'express'

export async function getAllPlaces() {
  const AllPlaces = await request.get('/api/v1/nzplaces')
  console.log(AllPlaces)
  return AllPlaces.body
}

export async function getPlaceById(id: number) {
  const placeById = await request.get(`/api/v1/nzplaces/${id}`)
  console.log(placeById)
  return placeById.body
}

export async function getDestinationForPlaces(id: number) {
  const destination = await request.get(`/api/v1/nzplaces/${id}/destination`)
  console.log(destination)
  return destination.body
}
