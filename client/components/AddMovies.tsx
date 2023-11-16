import { useQuery } from '@tanstack/react-query'
import { getAllMovies } from '../apis/apiClient'
import * as Models from '../../models/movies'
import { Link } from 'react-router-dom'

export function AddMovies() {
  const {
    data: movies,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['movies'],
    queryFn: () => getAllMovies(),
  })

  if (!movies || isLoading) {
    return <h1>Loading</h1>
  }

  if (error) {
    return <h1>Error </h1>
  }

  return (
    <>
      <form>
        <label></label>
        <input></input>
        <label></label>
        <input></input>
      </form>
    </>
  )
}

export default AddMovies
