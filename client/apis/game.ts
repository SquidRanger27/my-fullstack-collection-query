import request from 'superagent';
import { Game, NewGame } from '../../models/game';

const apiUrl = '/api/v1/PCGamesCollection';

export async function getGamesApi(): Promise<Game[]> {
  const res = await request.get(apiUrl);
  return res.body;
}

export async function getSingleGameApi(id: number): Promise<Game> {
  const res = await request.get(`${apiUrl}/${id}`);
  return res.body;
}

export async function addGameApi(newGame: NewGame): Promise<Game> {
  const response = await request.post(apiUrl).send(newGame);
  return response.body;
}

export async function deleteGameApi(id: number): Promise<void> {
  await request.delete(`${apiUrl}/${id}`);
}

