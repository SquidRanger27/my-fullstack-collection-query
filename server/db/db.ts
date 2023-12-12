import connection from './connection'
const db = connection
import { DestinationInput, Destination } from '../../models/destinationModel'

export async function getAllPlaces(): Promise<Destination[]> {
  return db('NZ places').select('*')
}

export function getPlaceById(id: number): Promise<Destination> {
  return db('NZ places').where({ id }).first()
}

export function getDestinationForPlaces(NZPlaceId: number) {
  return db('destination')
    .select('id', 'name', 'NZ places_id as NZPlaceId', 'description', 'image')
    .where('NZ places_id', NZPlaceId)
    .returning('*')
}

export async function addDestinationForPlaces(
  destination: DestinationInput
): Promise<Destination> {
  const { NZPlaceId, name, description, image } = destination
  const [result] = await db('destination')
    .insert({ name, description, image, 'NZ places_id': NZPlaceId })
    .returning(['id', 'name', 'description', 'image', 'NZ places_id'])

  return result
}

export async function deleteDestinationForPlace(id: number) {
  await db('destination').where({ id }).delete()
}

export async function updateDestination(
  destinationId: number,
  destination: DestinationInput
): Promise<Destination[]> {
  const { NZPlaceId, name, description, image } = destination
  const [result] = await db('destination')
    .where('id', destinationId)
    .update({ name, description, image, 'NZ places_id': NZPlaceId })
    .returning(['id', 'name', 'description', 'image', 'NZ places_id'])

  return result
}
