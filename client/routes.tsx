import { Route, createRoutesFromElements } from 'react-router-dom'
import App from './components/App'
import SingleVerse from './components/SingleVerse'
import VerseList from './components/VerseList'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<VerseList />} />
    <Route path="/verses/:id" element={<SingleVerse />} />
  </Route>
)
