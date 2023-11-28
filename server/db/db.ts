import connection from './connection'

export function getTodos(){
  return connection('todo').select()
}

export function updateStatus(body){
  return connection('todo').update({status:body.status}).where("id",body.id).returning(["id","status"])
}
export function deleteTodo(id){
  return connection('todo').delete().where("id",id)
}

export function addTodo(body){
  return connection('todo').insert(body)
}