import request from 'superagent'
import DigimonData from '../../models/digimon'

const digimonUrl = '/api/v1/digimons'

export async function getDigimonApi(): Promise<DigimonData[]> {
  const digimonResp = await request.get(digimonUrl)
  return digimonResp.body
}
