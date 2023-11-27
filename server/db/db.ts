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

export async function updateFilm(
  id: number,
  updates: Partial<Films>
): Promise<Films | undefined> {
  try {
    const [updatedFilm] = await connection('films')
      .where({ id })
      .update(updates, ['id', 'title', 'director', 'year'])
      .returning(['id', 'title', 'director', 'year'])

    return updatedFilm
  } catch (error) {
    console.error('Error updating film:', error)
    return undefined
  }
}
