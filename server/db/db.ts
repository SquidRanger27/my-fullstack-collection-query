import connection from './connection'
import {Art, ArtHeading, NewArt}from '../../models/art'

export async function getArtOverview(): Promise<ArtHeading[]>{
  return connection('art').select('id', 'name', 'imageUrl')
}

export async function getArtById(id:number): Promise<Art>{
  return connection('art')
  .where("id", id)
  .select('*')
  .first()
}

export async function addArt(newArt:NewArt): Promise<Art>{
  return connection('art').insert(
    {
      "name": newArt.name,
      "description": newArt.description,
      "medium": newArt.medium,
      "imageUrl": newArt.imageUrl,
      "owner": newArt.owner
    }
  )
}
