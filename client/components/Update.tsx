import * as Models from '../../models/movie'
import { useState } from 'react'
import { updateMovieApi } from '../apis/movies'
import { useParams } from 'react-router-dom'


interface Props {
    name: string
    description: string 
    director: string
    leadActor: string
  }

export default function Update({name, description, director, leadActor} : Props) {
    const {id} = useParams()
    
    const [movie, setMovie] = useState([] as Models.newMovie[])
    // State for our list of items
    const [item, setItem] = useState({ name: name, description: description, director: director, leadActor: leadActor})
    
    // State for our new item input
    const handleChange = (event)=> {
      setItem({...item, [event.target.id]: event.target.value})
    }
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('Submitting:', event)
        const sid = await updateMovieApi(item, id)
        setMovie([...movie, {...item, sid: sid[0]}])
      }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          Update a movie from the 90's Form: <br />
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