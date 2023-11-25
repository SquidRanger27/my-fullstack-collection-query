import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import Characters from './components/Characters.tsx'
import Test from './components/Test.tsx'

export const routes = createRoutesFromElements(
  <Route element={<App />}>
    <Route index element={<Navigate to="characters" />} />
    <Route path="characters" element={<Characters />} />
    <Route path="test" element={<Test />} />
  </Route>
)
