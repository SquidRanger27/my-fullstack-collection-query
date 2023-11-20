import connection from './connection.ts'
import { Item } from '../../models/items.ts'

export async function getAllItems(): Promise<Item[]> {
  return await connection('items').select()
}
