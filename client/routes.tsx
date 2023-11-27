import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import { Books } from './components/Books'
import { BookCreate } from './components/BookCreate'
import { Book } from './components/Book'

export const routes = createRoutesFromElements(
  <Route path='/' element={<App />}>
    <Route index element={<Books />} />
    <Route path='/books/add-book' element={<BookCreate />} />
    <Route path='/books/:id' element={<Book />}/>
  </Route>
)