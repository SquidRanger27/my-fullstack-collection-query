import { Films } from '../../models/films'
import connection from './connection'

export async function getAllFilms(): Promise<Films[]> {
  return connection('films').select('*')
}
