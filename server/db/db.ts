import connection from './connection'
import DigimonData from '../../models/digimon'

export function getDigimonDb(): Promise<DigimonData[]> {
  return connection('digimons').select()
}
