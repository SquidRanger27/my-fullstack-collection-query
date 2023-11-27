import React, { useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { getAllFilms, addFilmByTitle } from '../apis/films'
import { deleteFilmById } from '../apis/films'
import { updateFilmById } from '../apis/films'

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
  const [updateData, setUpdateData] = useState<{
    id: number
    title?: string
    director?: string
    year?: number
  } | null>(null)

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

  const handleUpdateFilm = (
    id: number,
    title?: string,
    director?: string,
    year?: number
  ) => {
    setUpdateData({ id, title, director, year })
  }

  const handleApplyUpdate = () => {
    if (updateData) {
      const { id, title, director, year } = updateData

      updateFilmById(id, { title, director, year })
        .then(() => {
          refetch()
          setUpdateData(null)
        })
        .catch((error) => {
          console.error('Error updating film:', error)
        })
    }
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
        <button onClick={() => handleUpdateFilm(film.id, film.title)}>
          Update Film
        </button>
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
        <label htmlFor="filmTitle">Film Title:</label>
        <input
          type="text"
          id="filmTitle"
          name="filmTitle"
          placeholder="Enter a film title"
          value={newFilmTitle}
          onChange={(e) => setNewFilmTitle(e.target.value)}
        />
        <button type="submit">Add Film</button>
      </form>
      <ul>{filmItems}</ul>

      {updateData && (
        <div>
          <h3>Update Film</h3>
          <label htmlFor="updateTitle">
            Title:
            <input
              type="text"
              id="updateTitle"
              name="updateTitle"
              value={updateData.title || ''}
              onChange={(e) =>
                setUpdateData({ ...updateData, title: e.target.value })
              }
            />
          </label>
          <label htmlFor="updateDirector">
            Director:
            <input
              type="text"
              id="updateDirector"
              name="updateDirector"
              value={updateData.director || ''}
              onChange={(e) =>
                setUpdateData({ ...updateData, director: e.target.value })
              }
            />
          </label>
          <label htmlFor="updateYear">
            Year:
            <input
              type="number"
              id="updateYear"
              name="updateYear"
              value={updateData.year || ''}
              onChange={(e) =>
                setUpdateData({
                  ...updateData,
                  year: parseInt(e.target.value, 10) || undefined,
                })
              }
            />
          </label>
          <button onClick={handleApplyUpdate}>Apply Update</button>
        </div>
      )}
    </div>
  )
}

export default Films
