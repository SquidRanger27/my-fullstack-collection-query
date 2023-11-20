import connection from './connection'
import { DigimonData, NewDigimonData } from '../../models/digimon'

export function getDigimonDb(): Promise<DigimonData[]> {
  return connection('digimons').select()
}

export function addDigimonDb(data: DigimonData): Promise<DigimonData[]> {
  return connection('digimons').insert(data)
}

// export async function renameDigimonDb(
//   id: number,
//   digimon_name: string,
//   digimon_type: string
// ): Promise<DigimonData | undefined> {
//   return connection('digimons')
//     .where({ id })
//     .update({ digimon_name, digimon_type })
//     .returning(['id', 'digimon_name', 'digimon_type'])
// }

export function deleteDigimonDb(id: number) {
  return connection('digimons').where({ id: id }).delete()
}
