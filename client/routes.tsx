import { Route, createRoutesFromElements } from 'react-router-dom'

import HomePage from './components/HomePage'
import AppLayout from './components/AppLayout'
import DetailPage from './components/DetailPage'

export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/destination/:id" element={<DetailPage />} />
  </Route>
)
