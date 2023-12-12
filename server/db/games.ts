import connection from './connection'
import { Game, NewGame } from '../../models/game'

export async function getAllGamesDb(db = connection): Promise<Game[]> {
  return db('PCGamesCollection').select('id', 'game', 'developer', 'year');
}

export async function getGameByIdDb(
  id: number,
  db = connection
): Promise<Game> {
  return db('PCGamesCollection')
  .select('id', 'game', 'developer', 'year')
  .where('id', id)
  .first();
}

export async function addGameDb(
  newGame: NewGame,
  db = connection
): Promise<NewGame[]> {
  return await db('PCGamesCollection').insert(newGame).returning('*')
}

export async function deleteGameDb(id: number, db = connection): Promise<void> {
  await db('PCGamesCollection').where('id', id).delete()
}