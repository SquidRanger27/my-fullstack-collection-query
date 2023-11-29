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

export async function addDestination(destinationData: {
  destination: DestinationInput
  NZPlaceId: number
}): Promise<Destination> {
  const { image, ...data } = destinationData.destination

  const res = await request
    .post(`/api/v1/nzplaces/${destinationData.NZPlaceId}/destination`)
    .field('name', data.name)
    .field('description', data.description)
    .field('NZPlaceId', data.NZPlaceId)
    /* @ts-expect-error superagent types use the wrong Blob type */
    .attach('image', image)

  return res.body
}

export async function deleteDestination(id: number): Promise<void> {
  const response = await request.delete(`/api/v1/nzplaces/destination/${id}`)

  if (!response.ok) {
    throw new Error(`Failed to delete destination with ID ${id}`)
  }
}

export async function updateDestination(
  id: number,
  updatedData: DestinationInput
): Promise<Destination> {
  const newDestination = await request
    .patch(`/api/v1/nzplaces/destination/${id}`)
    .send(updatedData)
  return newDestination.body
}
