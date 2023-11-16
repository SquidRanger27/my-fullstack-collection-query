import { useQuery } from '@tanstack/react-query'
import { getAllMovies } from '../apis/apiClient'

export function MovieList() {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getAllMovies(),
  })
  return (
    <>
      <h1>My Movie List</h1>
    </>
  )
}

export default MovieList
