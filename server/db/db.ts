import knexfile from './knexfile.js'
import knex from 'knex'
import { CharacterModel, NewCharacterModel } from '../../models/Character.js'

const db = knex(knexfile.development)

export async function getCharacters() {
  return db.table('characters').select()
}

export async function deleteCharacter(id: number) {
  return db.table('characters').delete().where('id', id)
}

export async function addCharacter(newCharacter: NewCharacterModel) {
  return db.table('characters').insert(newCharacter)
}

export async function updateCharacter(character: CharacterModel) {
  return db.table('characters').update(character).where('id', character.id)
}

export function close() {
  db.destroy()
}
