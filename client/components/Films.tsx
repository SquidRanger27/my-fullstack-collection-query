import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllFilms } from '../apis/films'

const Films: React.FC = () => {
  const {
    data: films,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['films'],
    queryFn: getAllFilms,
  })

  if (isError) {
    return <>Something went wrong</>
  }

  if (!films || isLoading) {
    return <>Loading...</>
  }

  const filmItems: JSX.Element[] = []

  // Used loop for assessement instead of map
  for (let i = 0; i < films.length; i++) {
    const film = films[i]
    filmItems.push(
      <li key={film.id}>
        <strong>Title:</strong> {film.title}, <strong>Director:</strong>{' '}
        {film.director}, <strong>Year:</strong> {film.year}
      </li>
    )
  }

  return (
    <div>
      <h2>Films</h2>
      <ul>{filmItems}</ul>
    </div>
  )
}

export default Films
