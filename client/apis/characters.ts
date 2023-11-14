import request from 'superagent'

export async function getCharacters() {
  const response = await request.get('/api/v1/characters')
  return response.body
}
