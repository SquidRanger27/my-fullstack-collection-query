import connection from './connection'
import { DigimonData } from '../../models/digimon'

export async function getDigimonDb(): Promise<DigimonData[]> {
  const digimons = await connection('digimons').select(
    'id as id',
    'digimon_name as digimonName',
    'digimon_type as digimonType'
  )
  // console.log('DB:', digimons)

  return digimons
}

export function addDigimonDb(
  digimon_name: string,
  digimon_type: string
): Promise<DigimonData[]> {
  // console.log('DB add')
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
): Promise<DigimonData[]> {
  return connection('digimons')
    .where({ id })
    .update({ digimon_name, digimon_type })
    .returning([
      'id as id',
      'digimon_name as digimonName',
      'digimon_type as digimonType',
    ])
}

export function deleteDigimonDb(id: number) {
  return connection('digimons').where({ id: id }).delete()
}
