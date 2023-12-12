import { useQuery } from '@tanstack/react-query'
import { getGamesApi } from '../apis/game'
import { Link } from 'react-router-dom'

export default function GamesList() {
  const {
    data: games,
    error,
    isLoading,
  } = useQuery({ queryKey: ['games'], queryFn: getGamesApi })

  if (error) {
    return <p>Looks like the games are uninstalled, or worse: Sold!</p>
  }
  if (!games || isLoading) {
    return <p>Installing games...</p>
  }

  return (
    <>
      <div>
        <header>
          <h1 id="title">Current Game Library</h1>
        </header>
        <ul id="gameList">
          {games.map((game) => (
            <li key={game.id}>
              <Link to={`/game/${game.id}`}>{game.game}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}