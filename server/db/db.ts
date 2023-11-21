import connection from './connection'
import { DigimonData, NewDigimonData } from '../../models/digimon'

export function getDigimonDb(): Promise<DigimonData[]> {
  return connection('digimons').select(
    'id as id',
    'digimon_name as digimonName',
    'digimon_type as digimonType'
  )
}

export function addDigimonDb(
  digimon_name: string,
  digimon_type: string
): Promise<DigimonData[]> {
  return connection('digimons')
    .insert({ digimon_name, digimon_type })
    .returning([
      'id as id',
      'digimon_name as digimonName',
      'digimon_type as digimonType',
    ])
}

export async function renameDigimonDb(
  id: number,
  digimon_name: string,
  digimon_type: string
): Promise<DigimonData | undefined> {
  return connection('digimons')
    .where({ id })
    .update({ digimon_name, digimon_type })
    .returning(['id as id', 'digimon_name as digimonName', 'digimonType'])
}

export function deleteDigimonDb(id: number) {
  return connection('digimons').where({ id: id }).delete()
}
