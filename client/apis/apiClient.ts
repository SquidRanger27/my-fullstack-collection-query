import request from "superagent";
const route = '/api/v1/todo'
export async function displayTodos(){
  const response = await request.get('/api/v1/todo')
  return response.body
}
export async function updateStatus(body){
  const response = await request.patch(route).send(body)
  return response.body
}
export async function deleteTodo(id){
  await request.delete(route).send(id)
}
export async function addTodo(body){
  await request.post(`${route}/addTodo`).send(body)
}
export async function editTodo(body){
  await request.patch(`${route}/editTodo`).send(body)
}