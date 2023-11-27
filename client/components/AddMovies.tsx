import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addMovie, getAllMovies } from '../apis/apiClient'
import * as Models from '../../models/movies'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function AddMovies() {
  const [rating, setRating] = useState(0)
  const [name, setName] = useState('')

  const queryClient = useQueryClient()

  const addMovieMutation = useMutation({
    mutationFn: addMovie,
    onSuccess() {
      queryClient.invalidateQueries(['movies'])
    },
  })

  return (
    <>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <form
        onSubmit={() => {
          addMovieMutation.mutate({ name: name, rating: rating })
        }}
      >
        <label htmlFor="name">Movie Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="rating">Personal Rating</label>
        <input
          id="rating"
          type="number"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.valueAsNumber)}
        />
        <button type="submit">Save</button>
      </form>
    </>
  )
}

export default AddMovies
