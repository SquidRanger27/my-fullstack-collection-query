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
    <div className="collection hflex">
      {art.map((item)=>{
      return(
        <>
        <div className='vflex'>
        <h3>{item.name}</h3>
        <img src={item.imageUrl}/>
        </div>

        </>
      )
      })}
    </div>
    </>
  )
}