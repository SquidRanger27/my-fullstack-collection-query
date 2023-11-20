import connection from './connection.ts'
import { Item } from '../../models/items.ts'

export async function getAllItems(): Promise<Item[]> {
  return await connection('items').select()
}

export async function addItem(
  name: string,
  item: string,
  description: string
): Promise<Item[]> {
  return await connection('items')
    .insert({ name, item, description })
    .returning(['id', 'name', 'item', 'description'])
}
