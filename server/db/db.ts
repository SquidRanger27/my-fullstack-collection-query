import { GameData } from "../../models/games.ts"
import db from './connection.ts'


export async function getAllGames():Promise<GameData[]>{
    console.log('hi')
    return db('games').select('*')
}


// export async function addGame(name: string): Promise<GameData> {
//     return db('games').insert({ name }).returning(['title', 'rating'])
//   }
  
//   export async function renameGame(
//     title: string,
//     releaseDate: Date,
//     hoursPlayed: number,
//     rating: number,

//   ): Promise<GameData | undefined> {
//     return db('games').where({ title }).update({ title }).returning(['title', 'rating'])
//   }
  
//   export async function deleteGame(title: string): Promise<void> {
//     await db('games').where({ title }).delete()
//   }