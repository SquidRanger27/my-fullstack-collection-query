import React, { useEffect, useState } from 'react'
import { fetchGames, deleteGame } from './Api'
import UpdateForm from './UpdateForm'
import GameListItem from './GameListItem'

interface Game {
  id: number
  title: string
  developer: string
  year: number
}

interface GameListProps {
  refetchGames: () => Promise<void>
}

const GameList: React.FC<GameListProps> = ({ refetchGames }) => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    fetchGames().then((data) => setGames(data))
  }, [])

  const handleDeleteGame = async (gameId: number) => {
    await deleteGame(gameId)
    await refetchGames()
  }

  return (
    <div>
      <h1>PC Games Collection</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <GameListItem game={game} onDelete={handleDeleteGame} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameList
