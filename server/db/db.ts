//db.ts
import connection from './connection.ts'
import { Cheese } from '../../models/cheese'

export async function getAllCheeses(): Promise<Cheese[]> {
  return connection('cheese').select()
}

export async function addCheeseToDb(cheese: any) {
  return connection('cheese').insert(cheese)
}

export async function deleteCheeseFromDb(id: number) {
  return connection('cheese').where({ id }).delete()
}
