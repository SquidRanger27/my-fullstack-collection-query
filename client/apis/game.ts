import request from 'superagent';
import { Game, NewGame } from '../../models/game';

const apiUrl = '/api/v1/games';

export async function getGamesApi(): Promise<Game[]> {
  try {
    const res = await request.get(apiUrl);
    return res.body;
  } catch (error) {
    console.error('Error obtaining games:', error);
    throw new Error('Failed to obtain games');
  }
}

export async function getSingleGameApi(id: number): Promise<Game> {
  try {
    const res = await request.get(`${apiUrl}/${id}`);
    return res.body;
  } catch (error) {
    console.error(`Error obtaining game id ${id}:`, error);
    throw new Error(`Failed to obtain game id ${id}`);
  }
}

export async function addGameApi(newGame: NewGame): Promise<Game> {
  const response = await request.post(apiUrl).send(newGame);
  return response.body;
}

export async function deleteGameApi(id: number): Promise<void> {
  await request.delete(`${apiUrl}/${id}`);
}
