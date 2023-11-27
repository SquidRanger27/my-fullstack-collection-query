import { Films } from '../../models/films'
import connection from './connection'

export async function getAllFilms(): Promise<Films[]> {
  return connection('films').select('*')
}

export async function addFilmByTitle(title: string): Promise<Films> {
  return connection('films')
    .insert({ title })
    .returning(['id', 'title', 'director', 'year'])
    .then((result) => result[0])
}

export async function deleteFilm(id: number): Promise<void> {
  await connection('films').where({ id }).delete()
}
