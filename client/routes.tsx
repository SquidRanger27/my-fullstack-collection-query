import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'

// import ItemsList from './components/ItemsList.tsx'

export const routes = createRoutesFromElements(
  <Route>
    <Route index element={<App />} />
    {/* <Route path="/items" element={<ItemsList />} /> */}
    {/* <Route path="/items/add" element={<ItemsList />} /> */}
  </Route>
)
