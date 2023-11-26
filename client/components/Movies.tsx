import { useEffect, useState } from 'react'
import { MovieData } from '../../models/Movie'
import { Movie } from './Movie'
import { getAllMovies } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { query } from 'express'

export function Movies() {
  const [movies, setMovies] = useState<MovieData[]>()

  useQuery({
    queryFn: () => {
      return getAllMovies()
        .then((result) => {
          setMovies(result.body)
          return result.body
        })
        .catch((error) => {
          console.log(error.message)
          return error.message
        })
    },
    queryKey: ['getAllMovies'],
  })

  if (movies == null) {
    return <p>Fetching Movies....</p>
  }

  return movies.map((element) => <Movie data={element} key={element.id} />)
}
