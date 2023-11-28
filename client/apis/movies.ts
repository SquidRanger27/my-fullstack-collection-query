import request from 'superagent'

import { movies, movieId } from '../../models/movie.ts'
const movieURL = '/api/v1/movies'

export async function getMoviesApi(): Promise<movies[]> {
    try {
      const res = await request.get(movieURL)
      return res.body
    } catch (error) {
      throw console.error('Error fetching Movies.', error)
    }
  }

  export async function getAMovieApi(id: number): Promise<movies[]> {
    try {
      const res = await request.get(`${movieURL}/${id}`)
      return res.body
    } catch (error) {
      throw console.error('Error fetching a Movie.', error)
    }
  }

  export async function addMovieApi(movie): Promise<newMovie[]> {
    try {
      const res = await request.post(movieURL, movie)
      return res.body
    } catch (error) {
      throw console.error('Error adding a Movie.', error)
    }
  }

  export async function deleteMovieApi(id : movieId) {
    //console.log(id)
    const widgetData = await request.delete(`/api/v1/movies/${id}`)
  
    return widgetData.body
  }

  export async function updateMovieApi(movie : movies, id : movieId) {
    //console.log(id)
    const widgetData = await request.patch(`/api/v1/movies/${id}`)
  
    return widgetData.body
  }