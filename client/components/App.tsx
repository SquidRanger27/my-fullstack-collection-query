import {useQuery} from '@tanstack/react-query'
import { getAllArtHeadings } from "../apis/apiClient"
import {Link} from 'react-router-dom'
import AddForm from './AddForm'
import OneImage from './oneImage'

export default function App (){
  
  const { data: art, isLoading, isError, error } = useQuery(['art'], getAllArtHeadings, {
    staleTime: 0,
    refetchOnMount: 'always',
  })
  if (isError){
    console.error('error grabbing the art list', error)
    return <p>hmm, not sure what happened</p>
  }
  if(!art || isLoading){
    return <p>drafting artworks...</p>
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
          <img src={item.imageUrl}/>
          </div>
        </Link>
      )
      })}
    </div>
      <OneImage />
      {/* <AddForm /> */}
    </>
  )
}