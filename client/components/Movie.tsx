import { getAMovieApi } from '../apis/movies'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { movies } from '../../models/movie'

export default function Movie() {
    const {id} = useParams()
    const { data: movie, isError, isLoading, } : {
      data: movies | undefined
      isError: boolean
      isLoading: boolean
    }
     = useQuery({ queryKey: ['movies', id], queryFn:  ()=> getAMovieApi(Number(id)) })
  if (isError) {
    return <p>Your movies are gone! What a massive error</p>
  }
  if (!movie || isLoading) {
    return <p>Fetching Movies from the 90's...</p>
  }

  return (
    <>
      <div>
        <h1 id="">Movie list</h1>
              <div key={movie.id}>
                <b>Name: {movie.name}</b>
                <p>Director: {movie.director}</p>
                <p>Description: {movie.description}</p>
                <p>Lead Actor: {movie.leadActor}</p>
              </div>
      </div>
    </>
  )
}