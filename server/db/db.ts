import connection from './connection.ts'

export async function getGames() {
  return await connection('PCGamesCollection').select('*')
}
