import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Movies from './components/Movies.tsx'
import Movie from './components/Movie.tsx'
import Addmovie from './components/Addmovie.tsx'
//import Update from './components/Update.tsx'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Movies />} />
    <Route path="/:id" element={<Movie />} />
    <Route path="/addmovie" element={<Addmovie />} />
  </Route>
)