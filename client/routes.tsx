import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import MovieList from './components/MovieList.tsx'
import App from './components/App.tsx'
import AddMovies from './components/AddMovies.tsx'

export const routes = createRoutesFromElements(
  <Route>
    <Route index element={<App />} />
    <Route path="/movies" element={<MovieList />} />
    <Route path="/movies/add" element={<AddMovies />} />
  </Route>
)
