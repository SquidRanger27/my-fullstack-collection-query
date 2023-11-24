import request from 'superagent'
import { CharacterModel, NewCharacterModel } from '../../models/Character'

export async function getCharacters() {
  const response = await request.get('/api/v1/characters')
  return response.body
}

export async function deleteCharacter(id: number) {
  const response = await request.delete('/api/v1/characters/' + id)
  return response.body
}

export async function addCharacter(newCharacter: NewCharacterModel) {
  const response = await request.put('/api/v1/characters/').send(newCharacter)
  return response.body
}

export async function editCharacter(character: CharacterModel) {
  const response = await request.patch('/api/v1/characters/').send(character)
  return response.body
}
