import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import GameLibrary from './components/GameLibrary'
import Games from './components/Games'
import SingleGame from './components/SingleGame'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<GameLibrary />} />
    <Route path="games" element={<Games />} />
    <Route path="game/:id" element={<SingleGame />} />
  </Route>
)