import { getMoviesApi } from '../apis/movies'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import Delete from './Delete'
import { movieId } from '../../models/movie'

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
  console.log(movies[0].id)
  return (
    <>
      <div>
        <h1 id="">Movie list</h1>
        <ul id="">
          {movies.map((movie) => {
            return (
              <li key={movie.id}><Link to={`/${movie.id}`}>Name: {movie.name}, Director {movie.director}</Link> <Delete movieId={movie.id}/>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}