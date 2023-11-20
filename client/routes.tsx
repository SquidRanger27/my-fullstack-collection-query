import { Route, createRoutesFromElements } from 'react-router-dom'

import HomePage from './components/AppLayout'
import AppLayout from './components/AppLayout'

export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
  </Route>
)
