import React from 'react'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import UpdateForm from './UpdateForm'

interface Game {
  id: number
  title: string
  developer: string
  year: number
}

const fetchGames = async () => {
  const apiUrl = '/api/v1/games'
  const response = await request.get(apiUrl)
  return response.body
}

const CollectionViewer: React.FC = () => {
  const {
    data: games,
    isLoading,
    isError,
  } = useQuery<Game[], Error>('games', fetchGames)

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
          games.map((game) => (
            <li key={game.id}>
              <strong>{game.title}</strong>
              <p>Developer: {game.developer}</p>
              <p>Year Released: {game.year}</p>
              {/* Include the UpdateForm component for each game */}
              <UpdateForm gameId={game.id} />
            </li>
          ))}
      </ul>
    </div>
  )
}

export default CollectionViewer
