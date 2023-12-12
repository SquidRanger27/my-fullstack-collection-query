import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Game, NewGame } from '../../models/game'
import { addGameApi } from '../apis/game'

const initialFormData = {
  game: '',
  developer: '',
  year: 0,
} as NewGame


export default function GameForm() {
  const [form, setForm] = useState<NewGame>(initialFormData)
  const queryClient = useQueryClient()

  const gameMutation = useMutation({
    mutationFn: addGameApi,
    onSuccess: async (newGame) => {
      console.log('New Game', newGame)
      setForm(initialFormData)
      const currentGames: Game[] | undefined = queryClient.getQueryData([
        'game',
      ])
      if (currentGames) {
        queryClient.setQueryData(['games'], [...currentGames, newGame])
      } else {
        queryClient.invalidateQueries({ queryKey: ['game'] })
      }
    },
  })

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    console.log('name', name)
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    gameMutation.mutate(form)
  }

  if (gameMutation.isLoading) {
    return <div>Compiling Games</div>
  }
  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Add Game Form">
        <p>
          <label htmlFor="game">Title:</label>
          <br />
          <input
            id="game"
            onChange={handleChange}
            value={form.game}
            name="game"
          />
        </p>

        <p>
          <label htmlFor="developer">Developer:</label>
          <br />
          <input
            id="developer"
            onChange={handleChange}
            value={form.developer}
            name="developer"
          />
        </p>
        <p>
          <label htmlFor="year">Year Released:</label>
          <br />
          <input
            id="year"
            onChange={handleChange}
            value={form.year}
            name="year"
          />
        </p>

        <button>Add New Game</button>
      </form>
    </>
  )
}