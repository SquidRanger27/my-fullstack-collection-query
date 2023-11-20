import { Route, createRoutesFromElements} from 'react-router-dom'
import AppLayout from './components/AppLayout'
import App from './components/App'

export const routes = createRoutesFromElements(
  <Route element = {<AppLayout />}>
    <Route index element = {<App />}/>
  </Route>
)