import { Route, createRoutesFromElements } from 'react-router-dom'

import HomePage from './components/HomePage'
import AppLayout from './components/AppLayout'
import DetailPage from './components/DetailPage'
import DestinationForm from './components/DestinationForm'
import EditPage from './components/EditPage'

export const routes = createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route index element={<HomePage />} />
    <Route path="/destination/:cityId" element={<DetailPage />} />
    <Route path="/destination/:cityId/add" element={<DestinationForm />} />
    <Route
      path="/destination/:cityId/edit/:destinationId"
      element={<EditPage />}
    />
  </Route>
)
