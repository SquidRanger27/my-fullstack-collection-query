import connection from './connection.ts'
import { Item, NewItem } from '../../models/items.ts'

// Links to router.get in server/routes/routes.ts
export async function getAllItems(): Promise<Item[]> {
  return await connection('items').select()
}

// Links to router.post in server/routes/routes.ts
export async function addItem(
  name: string,
  genre: string,
  description: string,
  dateLent: string
): Promise<NewItem[]> {
  return await connection('items')
    .insert({ name, genre, description, dateLent })
    .returning(['id', 'name', 'genre', 'description', 'dateLent'])
}

// Links to router.delete in server/routes/routes.ts
export async function deleteItem(id: number): Promise<Item[]> {
  return await connection('items').where({ id }).delete()
}

// Links to router.patch in server/routes/routes.ts
export async function editItem(
  id: number,
  genre: string,
  description: string,
  dateLent: string
): Promise<Item[]> {
  return await connection('items')
    .where({ id })
    .update({ genre, description, dateLent })
    .returning(['id', 'name', 'genre', 'description', 'dateLent'])
}
