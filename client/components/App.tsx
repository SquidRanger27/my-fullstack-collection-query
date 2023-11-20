import {useQuery} from '@tanstack/react-query'
import { getAllArtHeadings } from "../apis/apiClient"

export default function App (){
  
  const {data: art, isLoading, isError} = useQuery({queryKey:['art'], queryFn:getAllArtHeadings})
  if (isError){
    return <p>hmm, not sure what happened</p>
  }
  if(!art || isLoading){
    return <p>drafting artworks...</p>
  }
  
  return(
    <>
    <h2>Artwork List</h2>
    <ul>
      {art.map((item)=>{
      return(
        <>
        <li>{item.name}</li>
        <img src={item.imageUrl}/>

        </>
      )
      })}
    </ul>
    </>
  )
}