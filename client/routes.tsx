import App from "./components/App";
import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo";
import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'
export const routes = createRoutesFromElements(
  <>
  <Route path = "/" element = {<App />}/>
  <Route path = "/add" element = {<AddTodo />}/>
  <Route path = "/:id/edit" element = {<EditTodo />}/>
  </>
)