import React from 'react'
import GameList from './GameList'
import AddGameButton from './AddGameButton.tsx'

const App: React.FC = () => {
  const refetchGames = React.useCallback(async () => {}, [])

  return (
    <div>
      <AddGameButton refetchGames={refetchGames} />
      <GameList refetchGames={refetchGames} />
    </div>
  )
}

export default App
