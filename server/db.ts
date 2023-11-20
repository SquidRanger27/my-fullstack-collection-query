import connection from './db/connection'
const db = connection

export function getAllPlaces() {
  return db('NZ places').select()
}

export function getPlaceById(id: number) {
  return db('NZ places').select().where({ id })
}

export function addPlace(name: string, description: string) {
  return db('NZ places').insert({ name, description })
}

export function updatePlace(id: number, name: string, description: string) {
  return db('NZ places')
    .where({ id })
    .update({ name, description })
    .returning('*')
}

export function deletePlaceById(id: number) {
  return db('NZ places').delete().where({ id })
}
