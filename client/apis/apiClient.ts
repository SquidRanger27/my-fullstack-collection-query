import request from 'superagent'
import * as Art from '../../models/art'
import { response } from 'express'

export async function getAllArtHeadings(){
  const artHeadings = await request.get('/api/v1/artworks')
  console.log(artHeadings.body)
  return artHeadings.body
}

export async function getArtById(id:number){
  const artDetails = await request.get(`/api/v1/artworks/${id}`)
  return artDetails.body
}