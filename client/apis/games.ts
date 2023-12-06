import request from "superagent"
import type { GameData } from "../../models/games"


export async function getAllGames() {
    const res = await request.get('api/v1/games')
    return res.body as GameData[]
}

export async function deleteGame(title: string){
    return await request.delete(`api/v1/games/${title}`)
}