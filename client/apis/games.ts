import request from "superagent"
import type { GameData } from "../../models/games"


export async function getAllGames() {
    const res = await request.get('games')
    console.log(res)
    return res.body as GameData[]
}