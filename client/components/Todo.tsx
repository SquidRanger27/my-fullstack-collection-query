import {Card} from './Card.tsx'
export function Todo(props){
  const {todo} = props
  console.log("asdfs",todo.filter((data:number)=>data.status==1))
  return(
    <div className = "todoContainer">{todo.filter((data:number)=>data.status==1).map((data)=><Card {...data}/>)}</div>
  )
}