import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import MovieList from './components/MovieList.tsx'
import App from './components/App.tsx'

export const routes = createRoutesFromElements(
  <Route>
    <Route index element={<App />} />
    <Route path="/movies" element={<MovieList />} />
    <Route path="/movies/add" element={<MovieList />} />
  </Route>
)
