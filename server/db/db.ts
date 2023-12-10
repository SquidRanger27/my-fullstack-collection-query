import connection from './connection.ts'

export async function getGames() {
  return await connection('PCGamesCollection').select('*')
}

export async function addGame(newGame: any) {
  return await connection('PCGamesCollection').insert(newGame).returning('*')
}

export async function updateGame(gameId: number, updatedGame: any) {
  return await connection('PCGamesCollection')
    .where('id', gameId)
    .update(updatedGame)
}

export async function deleteGame(gameId: number) {
  return await connection('PCGamesCollection').where('id', gameId).del()
}
