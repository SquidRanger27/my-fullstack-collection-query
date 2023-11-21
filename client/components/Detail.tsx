import {useQuery} from '@tanstack/react-query'
import { getArtById} from "../apis/apiClient"
import {Link, useParams} from 'react-router-dom'


export default function Detail (){
  const id = useParams().id


  const {data: artDetail, isLoading, isError} = useQuery({queryKey:['art'], queryFn: ()=>getArtById(id),})
  if (isError){
    return <p>hmm, not sure what happened</p>
  }
  if(!artDetail || isLoading){
    return <p>drafting artworks...</p>
  }
  
  return(
    <>
    <div className="fill">
      <div className="vflex detail">
        <h2>{artDetail.name}</h2>
        <p>{artDetail.description}</p>  
        <div className='hflex infoLine'>
          <p><strong>Medium:</strong> {artDetail.medium}</p>
          <p><strong>Owner:</strong> {artDetail.owner}</p>
        </div>
        <img src={`${artDetail.imageUrl}`}/>
      </div>
    </div>

    <Link to='/'><p>Back To Home</p></Link>
    </>
  )
}