import request from 'superagent'
import { Destination, DestinationInput } from '../../models/destinationModel'

export async function getAllPlaces(): Promise<Destination[]> {
  const AllPlaces = await request.get('/api/v1/nzplaces')
  console.log(AllPlaces)
  return AllPlaces.body
}

export async function getPlaceById(id: number): Promise<Destination> {
  const placeById = await request.get(`/api/v1/nzplaces/${id}`)
  console.log(placeById)
  return placeById.body
}

export async function getDestinationForPlaces(
  id: number
): Promise<Destination[]> {
  const destination = await request.get(`/api/v1/nzplaces/${id}/destination`)
  console.log(destination)
  return destination.body
}

export async function addDestination(
  destination: DestinationInput,
  id: DestinationInput['NZPlaceId']
): Promise<Destination> {
  const toAdd = await request
    .post(`/api/v1/nzplaces/${id}/destination`)
    .send({ destination })
  return toAdd.body
}

export async function deleteDestination(id: number) {
  await request.delete(`/api/v1/nzplaces/destination/${id}`)
}

export async function updateDestination(
  id: number,
  updatedData: DestinationInput
): Promise<Destination> {
  const newDestination = await request
    .patch(`/api/v1/nzplaces/destination/${id}`)
    .send({ updatedData })
  return newDestination.body
}
