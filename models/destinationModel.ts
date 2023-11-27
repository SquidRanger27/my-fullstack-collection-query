export interface DestinationInput {
  name: string
  description: string
  image: string | undefined
  NZPlaceId: number
}

export interface Destination extends DestinationInput {
  id: number
}
