import request from 'superagent'

const apiUrl = '/api/v1/games'

export async function fetchGames() {
  const response = await request.get(apiUrl)
  return response.body
}

export async function addGame(newGameData) {
  const response = await request.post(apiUrl).send(newGameData)
  return response.body
}

export async function updateGame(gameId, updatedGameData) {
  const response = await request
    .put(`${apiUrl}/${gameId}`)
    .send(updatedGameData)
  return response.body
}

export async function deleteGame(gameId) {
  await request.delete(`${apiUrl}/${gameId}`)
}
