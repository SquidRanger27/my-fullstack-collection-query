import connection from './connection'
const db = connection

export interface DestinationInput {
  name: string
  description: string
  image: string | undefined
  NZPlaceId: number
}

export function getAllPlaces() {
  return db('NZ places').select('*')
}

export function getPlaceById(id: number) {
  return db('NZ places').where({ id }).first()
}

// export function addPlace(name: string, description: string) {
//   return db('NZ places')
//     .insert({ name, description })
//     .returning(['name', 'description'])
// }

// export function updatePlace(id: number, name: string, description: string) {
//   return db('NZ places')
//     .where({ id })
//     .update({ name, description })
//     .returning(['name', 'description'])
// }

// export async function deletePlaceById(id: number) {
//   await db('NZ places').where({ id }).delete()
// }

export function getDestinationForPlaces(NZPlaceId: number) {
  return db('destination')
    .select('id', 'name', 'NZ places_id as NZPlaceId', 'description', 'image')
    .where('NZ places_id', NZPlaceId)
    .returning('*')
}

export async function addDestinationForPlaces(
  destinationInput: DestinationInput
) {
  const { NZPlaceId, name, description, image } = destinationInput
  const [result] = await db('destination')
    .insert({ name, description, image, 'NZ places_id': NZPlaceId })
    .returning(['id', 'name', 'description', 'image', 'NZ places_id'])

  return result
}
