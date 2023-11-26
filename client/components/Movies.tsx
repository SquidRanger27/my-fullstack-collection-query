import { useEffect, useState } from 'react'
import { MovieData } from '../../models/Movie'
import { Movie } from './Movie'
import { getAllMovies } from '../apis/apiClient'

export function Movies() {
  const [movies, setMovies] = useState<MovieData[]>()

  useEffect(() => {
    getAllMovies()
      .then((result) => {
        setMovies(result.body)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [])

  if (movies == null) {
    return <p>Fetching Movies....</p>
  }

  return movies.map((element) => <Movie data={element} key={element.id} />)
}
