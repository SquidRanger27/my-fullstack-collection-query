import request from "superagent"
import type { GameData } from "../../models/games"


export async function getAllGames() {
    const res = await request.get('games')
    return res.body as GameData[]
}