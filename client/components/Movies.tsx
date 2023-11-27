import { getMoviesApi } from '../apis/movies'
import { useQuery } from '@tanstack/react-query'
//import { Link } from 'react-router-dom'

export default function Movies() {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({ queryKey: ['movies'], queryFn: getMoviesApi })

  if (error) {
    return <p>Your movies are gone! What a massive error</p>
  }
  if (!movies || isLoading) {
    return <p>Fetching Movies from the 90's...</p>
  }

  return (
    <>
      <div>
        <h1 id="">Movie list</h1>
        <ul id="">
          {movies.map((movie) => {
            return (
              <li key={movie.id}>Name: {movie.name}, Director {movie.director}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}