import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMovie, getAllMovies } from '../apis/apiClient'
import * as Models from '../../models/movies'
import { Link } from 'react-router-dom'

export function MovieList() {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getAllMovies(),
  })

  const queryClient = useQueryClient()

  const delMovieMutation = useMutation({
    mutationFn: deleteMovie,
    onSuccess() {
      queryClient.invalidateQueries(['movies'])
    },
  })

  if (!movies || isLoading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error </h1>
  }

  return (
    <>
      <Link to="/">
        <h1>Home</h1>
      </Link>

      <ul>
        {movies.map((movie: Models.Movies) => (
          <li key={movie.id}>
            {movie.name} - My rating: {movie.personal_rating}/10{' '}
            <button onClick={() => delMovieMutation.mutate(movie.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      <Link to="/movies/add">Click here to add a new movie</Link>
      {/* <h2>{movies[3].name}</h2>
      {console.log(movies)} */}
    </>
  )
}

export default MovieList
