import connection from "./connection"


export async function getAllGames(db = connection){
    return db('games').select()
}