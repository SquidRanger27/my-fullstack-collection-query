import request from 'superagent'

import { movies } from '../../models/movie.ts'
const movieURL = '/api/v1/movies'

export async function getMoviesApi(): Promise<movies[]> {
    try {
      const res = await request.get(movieURL)
      return res.body
    } catch (error) {
      throw console.error('Error fetching Movies.', error)
    }
  }