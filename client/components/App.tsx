import { Backlog } from "./Backlog"
import { useMutation,useQueryClient } from "@tanstack/react-query"
import AddTodo from "./AddTodo"
import {Todo} from "./Todo"
import {Wip} from "./Wip"
import {Done} from "./Done"
import { useQuery } from "@tanstack/react-query"
import * as api from '../apis/apiClient'
import { Link } from "react-router-dom"

function App() {
  const {data:todo ,error,isLoading} = useQuery({queryKey:['todo'],queryFn:api.displayTodos})
  // const queryClient = useQueryClient()

  // const addTodoMutation = useMutation({
  //   mutationFn:api.addTodo,
  //   onSuccess:async()=>{
  //     queryClient.invalidateQueries(['todo'])
  //   }
  // })
  if (error) {
    return <p>This is an Error</p>
  }
  if (!todo|| isLoading) {
    return <p>Internal Server Error</p>
  }



  return (
    <>
      <header className="header">
        <h1>Kanban Board</h1>
        <table className = "kanbanTable">
          <tr>
            <th>backlog <Link  to = "/add"><button>+</button></Link></th>
            <th>todo</th>
            <th>wip</th>
            <th>done</th>
          </tr>
          <tr>
            <td><Backlog todo = {todo}/></td>
            <td><Todo todo = {todo}/></td>
            <td><Wip todo = {todo}/></td>
            <td><Done todo = {todo}/></td>

          </tr>
        </table>
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
