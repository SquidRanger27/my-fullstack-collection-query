import { Films } from '../../models/films'
import connection from './connection'

export async function getAllFilms(): Promise<Films[]> {
  return connection('films').select('*')
}

export async function getFilmsById(id: number): Promise<Films | undefined> {
  return connection('films').where({ id }).first()
}
