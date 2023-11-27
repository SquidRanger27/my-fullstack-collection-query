import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteMovie, editMovie, getAllMovies } from '../apis/apiClient'
import * as Models from '../../models/movies'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function MovieList() {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)
  const [idMovie, setIdMovie] = useState(null)

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
      setEditing(false)
    },
  })

  const editMovieMutation = useMutation({
    mutationFn: editMovie,
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

  function startEditing(id) {
    setEditing(true)
    setIdMovie(id)
  }

  const handleStopEditingClick = () => {
    setEditing(false)
    // setText(text)
    // setRating(rating)
  }

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>, id) => {
    e.preventDefault()
    editMovieMutation.mutate({ name: text, rating, id })
    // TODO: submit the form to change the name
    console.log('submitting', text, rating, idMovie)

    setEditing(false)
  }

  return (
    <>
      <Link to="/">
        <h1>Home</h1>
      </Link>

      {!editing ? (
        <ul>
          {movies.map((movie: Models.Movies) => (
            <li key={movie.id}>
              {movie.name} - My rating: {movie.personal_rating}/10{' '}
              <button onClick={() => delMovieMutation.mutate(movie.id)}>
                Delete
              </button>
              <button onClick={() => startEditing(movie.id)}>Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <form onSubmit={(e) => handleEditSubmit(e, idMovie)}>
          <label htmlFor="name">Movie Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
          <button type="button" onClick={handleStopEditingClick}>
            Stop Editing
          </button>
        </form>
      )}

      <Link to="/movies/add">Click here to add a new movie</Link>
      {/* <h2>{movies[3].name}</h2>
      {console.log(movies)} */}
    </>
  )
}

export default MovieList
