import { useQuery } from "@tanstack/react-query"
import { Card } from "./Card"
export function Backlog(props){
  const {todo} = props

  return(
    <div className = "backlogContainer">{todo.filter((data:number)=>data.status==0).map((data)=>{
      
    return(<Card {...data}/>)})}</div>
  )
}