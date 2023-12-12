import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { Game } from '../../models/game'
import { getSingleGameApi } from '../apis/game'
import DeleteGame from './DeleteGame'

export default function SingleGame() {
  const { id } = useParams()
  const {
    data: game,
    isError,
    isLoading,
  }: {
    data: Game | undefined
    isError: boolean
    isLoading: boolean
  } = useQuery({
    queryKey: ['games', id],
    queryFn: () => getSingleGameApi(Number(id)),
  })

  if (isError) {
    return <p>Looks like the games are uninstalled, or worse: Sold!</p>
  }
  if (!game || isLoading) {
    return <p>Installing games...</p>
  }

  return (
    <>
      <h1 id="single-game">{game.game}</h1>
      <div>
        <p>
          <strong>Game:</strong> {game.game}
        </p>
        <p>
          <strong>Developer:</strong> {game.developer}
        </p>
        <p>
          <strong>Year Released:</strong> {game.year}
        </p>
      </div>
      <>
        <DeleteGame id={game.id} />
      </>
    </>
  )
}