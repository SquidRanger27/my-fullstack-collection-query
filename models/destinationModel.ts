export interface DestinationInput {
  name: string
  description: string
  image: string | File
  NZPlaceId: number
}

export interface Destination {
  id: number

  name: string
  description: string
  image: string
  NZPlaceId: number
}
