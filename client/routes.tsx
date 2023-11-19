import { Navigate, Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App.tsx'
import AdminForm from './components/AdminForm.tsx'

export const routes = createRoutesFromElements(
  // <Route path = "/" element={<App />}>
    
  //   <Route path="/admin" element={<AdminForm />} />

  // </Route>
  <>
    <Route path = "/" element={<App />}/>
  <Route path="/admin" element={<AdminForm />} />
  </>


  
)
