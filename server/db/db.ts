import connection from './connection'

export function getTodos(){
  return connection('todo').select()
}