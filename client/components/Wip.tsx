import { Card } from "./Card"
export function Wip(props){
  const {todo} = props
  console.log("asdfs",todo.filter((data:number)=>data.status==2))
  return(
    <div className = "wipContainer">{todo.filter((data:number)=>data.status==2).map((data)=><Card {...data}/>)}</div>
  )
}