import connection from './connection'
const db = connection

export function getAllPlaces() {
  return db('NZ places').select('*')
}

export function getPlaceById(id: number) {
  return db('NZ places').where({ id }).first()
}

export function addPlace(name: string, description: string) {
  return db('NZ places')
    .insert({ name, description })
    .returning(['name', 'description'])
}

export function updatePlace(id: number, name: string, description: string) {
  return db('NZ places')
    .where({ id })
    .update({ name, description })
    .returning(['name', 'description'])
}

export async function deletePlaceById(id: number) {
  await db('NZ places').where({ id }).delete()
}
