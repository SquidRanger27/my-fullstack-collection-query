import { FormEvent } from 'react'
import { MovieProps } from '../../models/Movie'
import { deleteMovie } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function Movie(props: MovieProps) {
  const { data, shouldEdit } = props
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] })
    },
  })

  function onDelete(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    deleteMutation.mutate(data.id)
  }

  function onEdit(event: FormEvent<HTMLButtonElement>) {
    event.preventDefault()
    shouldEdit(data.id)
  }

  return (
    <div className="movie">
      <p>Name: {data.name}</p>
      <p>Director: {data.director}</p>
      <img
        className="movie-image"
        src={data.image}
        alt={`${data.name} movie cover`}
      />
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  )
}
