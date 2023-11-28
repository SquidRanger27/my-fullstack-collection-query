export interface DestinationInput {
  name: string
  description: string
  image: string | Blob | undefined
  cityId: number
}

export interface Destination extends DestinationInput {
  id: number
}
