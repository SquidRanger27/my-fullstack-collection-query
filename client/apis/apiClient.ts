import request from 'superagent'
import * as Art from '../../models/art'
import { response } from 'express'

export async function getAllArtHeadings(){
  const artHeadings = await request.get('/api/v1/artworks')
  console.log(artHeadings.body)
  return artHeadings.body
}