import knexFile from './knexfile.js'
import knex from 'knex'

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]

const connection = knex(config)

export default connection

export async function getAllMovies() {
    // TODO: use knex to get the real location data from the database
    try{
      return await connection('movies').select('name', 'description', 'director', 'lead_actor as leadActor')
    } catch (err){
      console.log(err.message)
      return err.message
    }
  }