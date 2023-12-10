import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import request from 'superagent'

interface GameFormProps {
  onSuccess: () => void
}

const GameForm: React.FC<GameFormProps> = ({ onSuccess }) => {
  const queryClient = useQueryClient()

  const [formData, setFormData] = useState({
    title: '',
    developer: '',
    year: 0,
  })

  const createGame = async (newGameData: any) => {
    const apiUrl = '/api/v1/games'
    const response = await request.post(apiUrl).send(newGameData)
    return response.body
  }

  const mutation = useMutation(createGame, {
    onSuccess: () => {
      queryClient.invalidateQueries('games')
      onSuccess()
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    mutation.mutate(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Game</h2>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Developer:
        <input
          type="text"
          name="developer"
          value={formData.developer}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          name="year"
          value={formData.year}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit" disabled={mutation.isLoading}>
        {mutation.isLoading ? 'Adding...' : 'Add Game'}
      </button>
    </form>
  )
}

export default GameForm
