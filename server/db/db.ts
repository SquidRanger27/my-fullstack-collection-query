import connection from "./connection"

export function displayProducts(){
  return connection('products').select()
}