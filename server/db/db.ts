//db.ts
import connection from './connection.ts'
import { Cheese } from '../../models/cheese'

// GET all cheeses

export async function getAllCheeses(): Promise<Cheese[]> {
  return connection('cheese').select()
}

// ADD cheese

export async function addCheeseToDb(cheese: any) {
  return connection('cheese').insert(cheese)
}

// DELETE cheese

export async function deleteCheeseFromDb(cheeseId: number) {
  return connection('cheese').where({ id: cheeseId }).delete()
}

// UPDATE cheese

export async function updateCheeseInDb(
  cheeseId: number,
  updatedCheese: Cheese
) {
  return connection('cheese').where({ id: cheeseId }).update(updatedCheese)
}
