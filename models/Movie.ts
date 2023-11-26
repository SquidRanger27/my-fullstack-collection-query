export interface Movie {
  name: string
  director: string
  image: string
}

export interface MovieData {
  id: number
  name: string
  director: string
  image: string
}

export interface MovieProps {
  data: MovieData
  shouldEdit: (id: number) => void
}
