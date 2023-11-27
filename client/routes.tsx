import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import Books from './components/Books'
import SingleBook from './components/SingleBook'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="books" element={<Books />} />
    <Route path="book/:id" element={<SingleBook />} />
  </Route>
)
