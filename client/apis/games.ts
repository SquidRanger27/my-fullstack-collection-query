import request from "superagent"

export async function getAllGames() {
    const response = await request.get('/')

    return response.body as Games[]
}