import { useState } from 'react' 
import { getAMovieApi, updateMovieApi } from '../apis/movies'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'
import { movies } from '../../models/movie'

export default function Movie() { //{ name: '', description: '', director: '', leadActor: ''} : Props)
  const {id} = useParams()
  const [editing, setEditing] = useState(true) 
    //const queryClient = useQueryClient()
  const [item, setItem] = useState({ name: '', description: '', director: '', leadActor: ''})
  const { data: movie, isError, isLoading, } : {
    data: movies | undefined
    isError: boolean
    isLoading: boolean
  }
   = useQuery({ queryKey: ['movies', id], queryFn:  ()=> getAMovieApi(Number(id)) })
  if (isError) {
    return <p>Your movies are gone! What a massive error</p>
  }
  if (!movie || isLoading) {
    return <p>Fetching Movies from the 90's...</p>
  }
  
  //setItem(...item,{ name: movie.name, description: movie.description, director: movie.director, leadActor: movie.leadActor'})
  const handleStopEditingClick = () => {
    setEditing(false)
    //setText(name)
  }
  const handleStartEditingClick = () => {
    setEditing(true)
  }
  // State for our new item input
  const handleChange = (event : any)=> {
    console.log(event.target.value)
    setItem({...item, [event.target.id]: event.target.value}) 
  }
  // const editMutation = useMutation({
  //   mutationFn: updateMovieApi,
  //   onSuccess: async () => {
  //     queryClient.invalidateQueries(['movies'])
  //     // this code runs when the mutation is successful
  //     // you can use queryClient.invalidateQueries here
  //   },
  // })
  // const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   // TODO: submit the form to change the name
  //   editMutation.mutate({ id, newName: text })
  //   console.log('submitting', text)
  //   console.log('asdf', name)
  //   handleStartEditingClick()
  //   //setEditing(false)
  // }
  return (
    <>
      <div>
        <h1 id="">Movie list</h1>
        {editing ? (
          <div key={movie.id}>
            <b>Name: {movie.name}</b>
            <p>Lead Actor: {movie.leadActor}</p>
            <p>Director: {movie.director}</p>
            <p>Description: {movie.description}</p>
            <button onClick={handleStopEditingClick}>Edit</button>
          </div>
          ) : ( //onSubmit={handleSubmit} onChange={handleChange}
        <form >
        <p>
          Update a movie from the 90's Form: <br />
          <label > Name : {movie.name}
            <input type="text" name="name" id="name" value={item.name} onChange={handleChange} /> 
          </label> <br />
          <label > Lead Actor : {movie.leadActor} 
            <input type="text" name="leadActor" id="leadActor" value={item.leadActor} onChange={handleChange} /> 
          </label>  <br />
          <label > Director : {movie.director} 
            <input type="text" name="director" id="director" value={item.director} onChange={handleChange} /> 
          </label>  <br />
          <label >Description :{movie.description}  <br /> 
            <textarea name="description" id="description" value={item.description} onChange={handleChange}/> 
          </label>  <br />
          <button onClick={handleStartEditingClick}>Submit</button>
          <br />
        </p>
      </form>
          )}
      </div>
    </>
  )
}

//<p><Link to={`/update/${movie.id}`} movies={movie}> Update </Link></p>