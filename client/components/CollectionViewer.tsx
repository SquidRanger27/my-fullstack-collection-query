// components/CollectionViewer.tsx
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchGames } from './Api'
import UpdateForm from './UpdateForm'
import GameListItem from './GameListItem'

interface Game {
  id: number
  title: string
  developer: string
  year: number
}

const CollectionViewer: React.FC = () => {
  const { data: games, isLoading, isError } = useQuery(['games'], fetchGames)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  return (
    <div>
      <h1>PC Games Collection</h1>
      <ul>
        {games &&
          games.map((game) => <GameListItem key={game.id} game={game} />)}
      </ul>
    </div>
  )
}

export default CollectionViewer
