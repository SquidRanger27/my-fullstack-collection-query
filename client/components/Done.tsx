import { Card } from "./Card"
export function Done(props){
  const {todo} = props
  console.log("asdfs",todo.filter((data:number)=>data.status==3))
  return(
    <div className = "doneContainer">{todo.filter((data:number)=>data.status==3).map((data)=><Card {...data} />)}</div>
  )
}