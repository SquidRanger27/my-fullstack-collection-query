import { useState } from 'react'
import { MovieData } from '../../models/Movie'
import { Movie } from './Movie'
import { getAllMovies } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

interface MoviesProps {
  shouldEdit: (id: number) => void
}

export function Movies(props: MoviesProps) {
  const [movies, setMovies] = useState<MovieData[]>()

  const query = useQuery({
    queryFn: async () => {
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
    queryKey: ['movies'],
  })

  if (movies == null) {
    return <p>Movies is null</p>
  }

  if (query.isLoading) {
    return <p>Fetching Movies....</p>
  }

  if (query.isError) {
    return <p>Error fetching Movies....</p>
  }

  return movies.map((element) => (
    <Movie
      data={element}
      key={element.id}
      shouldEdit={(id) => {
        props.shouldEdit(id)
      }}
    />
  ))
}
