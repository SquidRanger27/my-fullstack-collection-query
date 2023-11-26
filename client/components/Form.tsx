import { FormEvent } from 'react'
import { addMovie, updateMovie } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Movie } from '../../models/Movie'

interface FormProps {
  shouldEdit: number
  setShouldEdit: (id: number) => void
}

export function Form(props: FormProps) {
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['movies'],
      })
    },
  })

  const updateMutation = useMutation({
    mutationFn: (data: { id: number; movie: Movie }) => {
      return updateMovie(data.id, data.movie)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['movies'],
      })
    },
  })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const name = formData.get('name') as string
    const director = formData.get('director') as string
    const image = formData.get('image') as string

    if (props.shouldEdit === 0) {
      addMutation.mutate({ name, director, image })
    } else {
      updateMutation.mutate({
        id: props.shouldEdit,
        movie: { name, director, image },
      })
    }

    event.currentTarget.reset()
    props.setShouldEdit(0)
  }

  return (
    <div className="Movie">
      <h2>{props.shouldEdit >= 1 ? 'Edit Movie' : 'Add Movie'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name
          <br />
          <input type="text" name="name" required={true} />
          <br />
        </label>
        <br />
        <label>
          Director
          <br />
          <input type="text" name="director" required={true} />
          <br />
        </label>
        <br />
        <label>
          Image
          <br />
          <input type="text" name="image" required={true} />
          <br />
        </label>
        <br />
        <input type="submit" name="submit" value="Submit" />
      </form>
    </div>
  )
}
