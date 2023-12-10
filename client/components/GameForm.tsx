import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addGame } from './Api'

interface GameFormProps {
  onSuccess: () => void
  refetchGames: () => Promise<void>
}

const GameForm: React.FC<GameFormProps> = ({ onSuccess, refetchGames }) => {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    title: '',
    developer: '',
    year: 0,
  })

  const mutation = useMutation(() => addGame(formData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['games'])
      onSuccess()
      refetchGames() // Assuming refetchGames is meant to refetch the game list
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Game</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <label htmlFor="developer">Developer</label>
      <input
        type="text"
        id="developer"
        value={formData.developer}
        onChange={(e) =>
          setFormData({ ...formData, developer: e.target.value })
        }
      />
      <label htmlFor="year">Year</label>
      <input
        type="number"
        id="year"
        value={formData.year}
        onChange={(e) =>
          setFormData({ ...formData, year: Number(e.target.value) })
        }
      />
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Adding...' : 'Add Game'}
      </button>
    </form>
  )
}

export default GameForm
