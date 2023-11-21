import request from 'superagent'
import { DigimonData, NewDigimonData } from '../../models/digimon'

const digimonUrl = '/api/v1/digimons'

export async function getDigimonApi(): Promise<DigimonData[]> {
  const digimonResp = await request.get(digimonUrl)
  return digimonResp.body
}

export async function addDigimonApi(data: DigimonData): Promise<DigimonData[]> {
  console.log(data)
  const digimonResp = await request.post(digimonUrl).send(data)
  return digimonResp.body
}

export async function renameDigimonApi(
  id: number,
  newName: string,
  newType: string
): Promise<DigimonData[]> {
  const digimonResp = await request
    .patch(digimonUrl)
    .send({ id, newName, newType })
  return digimonResp.body
}

export async function deleteDigimonApi(id: number) {
  const digimonResp = await request.delete(`${digimonUrl}/${id}`)
  return digimonResp.body
}
