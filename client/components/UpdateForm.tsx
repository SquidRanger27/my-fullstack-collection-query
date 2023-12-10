import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

interface Game {
  id: number
  title: string
  developer: string
  year: number
}

interface UpdateFormProps {
  gameId: number
}

const UpdateForm: React.FC<UpdateFormProps> = ({ gameId }) => {
  const queryClient = useQueryClient()

  const [updatedGame, setUpdatedGame] = useState<Game>({
    id: gameId,
    title: '',
    developer: '',
    year: 0,
  })

  const { mutate } = useMutation(
    (updatedGameData: Game) =>
      request.put(`/api/v1/games/${gameId}`).send(updatedGameData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['games'])
      },
    }
  )

  const handleUpdate = () => {
    mutate(updatedGame)
  }

  return (
    <div>
      <h2>Update Game</h2>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={updatedGame.title}
          onChange={(e) =>
            setUpdatedGame({ ...updatedGame, title: e.target.value })
          }
        />
        <label htmlFor="developer">Developer</label>
        <input
          type="text"
          id="developer"
          value={updatedGame.developer}
          onChange={(e) =>
            setUpdatedGame({ ...updatedGame, developer: e.target.value })
          }
        />
        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          value={updatedGame.year}
          onChange={(e) =>
            setUpdatedGame({ ...updatedGame, year: Number(e.target.value) })
          }
        />
        <button type="button" onClick={handleUpdate}>
          Update Game
        </button>
      </form>
    </div>
  )
}

export default UpdateForm
