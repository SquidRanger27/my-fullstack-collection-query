import React, { useEffect, useState } from 'react'
import request from 'superagent'

interface Game {
  id: number
  title: string
  developer: string
  year: number
}

const GameList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const apiUrl = '/api/v1/games'

    request.get(apiUrl).end((err, res) => {
      if (err) {
        console.error(err)
        return
      }

      setGames(res.body)
    })
  }, [])

  return (
    <div>
      <h1>PC Games Collection</h1>
      <ul>
        {games.map((game) => (
          <li key={game.id}>
            <strong>{game.title}</strong>
            <p>Developer: {game.developer}</p>
            <p>Year Released: {game.year}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GameList
