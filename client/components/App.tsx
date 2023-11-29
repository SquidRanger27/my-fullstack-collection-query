import {useQuery} from '@tanstack/react-query'
import { getAllArtHeadings } from "../apis/apiClient"
import { useState } from 'react'
import {Link} from 'react-router-dom'
import AddForm from './AddForm'
import OneImage from './oneImage'

export default function App (){
  const [editing, isEditing] = useState(false)
  const { data: art, isLoading, isError, error } = useQuery(['art'], getAllArtHeadings, {
  })
  if (isError){
    console.error('error grabbing the art list', error)
    return <p>hmm, not sure what happened</p>
  }
  if(!art || isLoading){
    return <p>drafting artworks...</p>
  }

  function handleClick (){
    isEditing(!editing)
  }

  return(
    <>
    <h2>Artwork List</h2>
    <div className="collection hflex">
      {art?.map((item)=>{
      return(
        <Link to={`/${item.id}`} key={item.id}>
          <div className='vflex artTile'>
          <h3>{item.name}</h3>
          <img src={item.imageUrl} alt={item.alt}/>
          </div>
        </Link>
      )
      })}
    </div>
    <button onClick={handleClick} className= {!editing? "visible":"hidden"}>Add New Image</button>
    <div className= {editing? "visible":"hidden"}>
      <OneImage />
    </div>
    </>
  )
}