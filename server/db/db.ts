//db.ts
import connection from './connection.ts'
import { Cheese } from '../../models/cheese'

export async function getAllCheeses(): Promise<Cheese[]> {
  return connection('cheese').select()
}

export async function addCheeseToDb(cheese: any) {
  return connection('cheese').insert(cheese)
}

export async function deleteCheeseFromDb(cheeseId: number) {
  return connection('cheese').where({ id: cheeseId }).delete()
}

export async function updateCheeseInDb(cheeseId: number, updatedCheese: any) {
  const { name, description, comment, rating_out_of_a_possible_10_Goldblums } =
    updatedCheese

  return connection('cheese')
    .where({ id: cheeseId })
    .update({
      name,
      description,
      comment,
      rating_out_of_a_possible_10_Goldblums,
    })
}
