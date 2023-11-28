import * as Models from '../../models/movie'
import { useState } from 'react'
import { addMovieApi } from '../apis/movies'

export default function Addmovie() {
  const [movie, setMovie] = useState([] as Models.newMovie[])
  // State for our list of items
  const [item, setItem] = useState({ name: '', description: '', director: '', leadActor: ''})
  // this generic tells useState that state will only be an array of strings

  // State for our new item input
  const handleChange = (event)=> {
    setItem({...item, [event.target.id]: event.target.value})
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Submitting:', event)
    const id = await addMovieApi(item)
    setMovie([...movie, {...item, id: id[0]}])
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          Add a movie from the 90's Form: <br />
          <label > Name <input onChange={handleChange} type="text" name="name" id="name" /> </label> <br />
          <label > Description <input onChange={handleChange} type="text" name="description" id="description" /> </label>  <br />
          <label > Director <input onChange={handleChange} type="text" name="director" id="director" /> </label>  <br />
          <label > Lead Actor <input onChange={handleChange} type="text" name="leadActor" id="leadActor" /> </label>  <br />
          <button>Submit</button>
          <br />
        </p>
      </form>
    </>
  )
}