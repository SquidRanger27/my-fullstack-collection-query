import knexFile from './knexfile.js'
import knex from 'knex'
import { movies, newMovie , movieId} from '../../models/movie.js' 

type Environment = 'production' | 'test' | 'development'

const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexFile[environment]

const connection = knex(config)

export default connection

export async function getAllMovies(): Promise<movies>  { 
    // TODO: use knex to get all the movie data from the database
    try{
      return await connection('movies').select('id','name', 'description', 'director', 'lead_actor as leadActor')
    } catch (err){
      console.log(err.message)
      return err.message
    }
  }

 export async function getAMovie(id: number) : Promise<movies> {
    // TODO: use knex to get the mevie data from the database
    try{
      return await connection('movies').select('id','name', 'description', 'director', 'lead_actor as leadActor').where('id', id).first()
    } catch (err){
      console.log(err.message)
      return err.message
    }
  }

export async function addAMovie(movie : Promise<newMovie>) {
    // TODO: use knex to insert movie data from to database
    try{
      return await connection('movies').insert(movie).returning('*')
    } catch (err){
      console.log(err.message)
      return err.message
    }
  }

  export async function deleteAMovie(id : number) {
    // TODO: use knex to insert movie data from to database
    try{
      return await connection('movies').delete().where('id', id).returning('*')
    } catch (err){
      console.log(err.message)
      return err.message
    }
  }

  
  export async function updateAMovie(movie : Promise<newMovie>, id : movieId) : Promise<movies> {
    // TODO: use knex to insert movie data from to database
    try{
      return await connection('movies').update(movie).where('id', id).returning('*')
    } catch (err){
      console.log(err.message)
      return err.message
    }
  }
