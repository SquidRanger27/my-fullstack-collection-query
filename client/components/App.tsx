import { Backlog } from "./Backlog"
import { useMutation,useQueryClient } from "@tanstack/react-query"
import {Todo} from "./Todo"
import {Wip} from "./Wip"
import {Done} from "./Done"
import { useQuery } from "@tanstack/react-query"
import * as api from '../apis/apiClient'

function App() {
  const {data:todo ,error,isLoading} = useQuery({queryKey:['todo'],queryFn:api.displayTodos})
if (error) {
  return <p>This is an Error</p>
}
if (!todo|| isLoading) {
  return <p>Internal Server Error</p>
}

console.log(todo)
function handleAdd(){

}
  return (
    <>
      <header className="header">
        <h1>Kanban Board</h1>
        <table>
          <tr>
            <th>backlog <button onClick = {handleAdd}>+</button></th>
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
