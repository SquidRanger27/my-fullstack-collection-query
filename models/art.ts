export interface Art{
  id:number
  name: string
  description: string
  medium: string
  imageUrl: string
  owner: string
}

export interface ArtHeading{
  id:number
  name: string
  imageUrl: string
}

export interface NewArt{
  name: string
  description: string
  medium: string
  imageUrl: string
  owner: string
}