import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './App'
import Home from './Home'
import Books from './Books'
import SingleBook from './SingleBook'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="books" element={<Books />} />
    <Route path="book/:id" element={<SingleBook />} />
  </Route>
)
