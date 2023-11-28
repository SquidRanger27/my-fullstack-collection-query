export interface DestinationInput {
  name: string
  description: string
  image: string | Blob | undefined
  NZPlaceId: number
}

export interface Destination extends DestinationInput {
  id: number
}
