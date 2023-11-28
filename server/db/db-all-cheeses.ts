//db.ts
import connection from './connection.ts'
import { Cheese } from '../../models/cheese.ts'

// GET all cheeses

export async function getAllCheesesDb(): Promise<Cheese[]> {
  return connection('cheese').select()
}

// GET one cheese

export async function getOneCheeseDb(cheeseId: number) {
  return connection('cheese').where({ id: cheeseId }).first()
}

// ADD cheese

export async function addCheeseDb(cheese: any) {
  return connection('cheese').insert(cheese)
}

// DELETE cheese

export async function deleteCheeseDb(cheeseId: number) {
  return connection('cheese').where({ id: cheeseId }).delete()
}

// UPDATE cheese

export async function updateCheeseDb(cheeseId: number, updatedCheese: Cheese) {
  return connection('cheese').where({ id: cheeseId }).update(updatedCheese)
}
