import { useState } from 'react'
import { MovieData, MovieDataProp } from '../../models/Movie'

export function Movie(props: MovieDataProp) {
  const { data } = props

  return (
    <div className="movie">
      <p>Name: {data.name}</p>
      <p>Director: {data.director}</p>
      <img
        className="movie-image"
        src={data.image}
        alt={`${data.name} movie cover`}
      />
    </div>
  )
}
