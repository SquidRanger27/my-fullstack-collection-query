import * as Models from '../../models/movie'
//import { useState, useEffect } from 'react'
import { deleteMovieApi } from '../apis/movies'

interface Props {
  movieId: number
}

export default function Delete(props: Props) {
  //const [count, setCount] = useState(0)
  async function handleClick(e) {
    e.preventDefault()
    await deleteMovieApi(props.movieId)
  }

  return (
    <>
      <button onClick={handleClick}>Delete </button>
    </>
  )
}