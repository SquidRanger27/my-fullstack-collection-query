import React, { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllFilms, addFilmByTitle } from '../apis/films'
import { deleteFilmById } from '../apis/films'

const Films: React.FC = () => {
  const {
    data: films,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['films'],
    queryFn: getAllFilms,
  })

  const [newFilmTitle, setNewFilmTitle] = useState('')

  const { mutate } = useMutation(addFilmByTitle, {
    onSuccess: () => {
      refetch()
      setNewFilmTitle('')
    },
  })

  const deleteFilmMutation = useMutation(deleteFilmById)

  const handleAddFilm = () => {
    if (newFilmTitle.trim() !== '') {
      mutate(newFilmTitle)
    }
  }

  const handleRemoveFilm = (id: number) => {
    deleteFilmMutation.mutate(id, {
      onSuccess: () => {
        refetch()
      },
    })
  }

  if (isError) {
    return <>Something went wrong</>
  }

  if (!films || isLoading) {
    return <>Loading...</>
  }

  const filmItems: JSX.Element[] = []
  // Using a loop for assessment instead of map
  for (let i = 0; i < films.length; i++) {
    const film = films[i]
    filmItems.push(
      <li key={film.id}>
        <strong>Title:</strong> {film.title}, <strong>Director:</strong>{' '}
        {film.director}, <strong>Year:</strong> {film.year}
        <button onClick={() => handleRemoveFilm(film.id)}>Remove Film</button>
      </li>
    )
  }

  return (
    <div>
      <h2>Films</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAddFilm()
        }}
      >
        <input
          type="text"
          placeholder="Enter a film title"
          value={newFilmTitle}
          onChange={(e) => setNewFilmTitle(e.target.value)}
        />
        <button type="submit">Add Film</button>
      </form>
      <ul>{filmItems}</ul>
    </div>
  )
}

export default Films
