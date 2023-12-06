import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import { GameList } from './GameList'
import { GameData } from '../../models/games'
import { deleteGame } from '../apis/games'

interface Props {
  title: any
  releaseDate: any
  hoursPlayed: number
  rating: number
  id: number
}


export default function GameListItem({ title, releaseDate, hoursPlayed, rating, id }: Props ) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(id)

  const queryClient = useQueryClient()

  const deleteGameMutation = useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['id'] })
    },
  })

  // const renameGameMutation = useMutation({
  //   mutationFn: renameGame,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['games'] })
  //   },
  // })

  const handleDeleteClick = () => {
    deleteGameMutation.mutate(id)
    console.log('deleting', id)
  }

  // const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   renameGameMutation.mutate({ title, newTitle: text })
  //   setText(text)
  //   console.log('submitting', text)

  //   setEditing(false)
  // }

  const handleStopEditingClick = () => {
    setEditing(false)
    setText(title)
  }

  const handleStartEditingClick = () => {
    setEditing(true)
  }

  return (
    <div>
      {editing ? (
        <form >
          <label>Name
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          </label>
          <button type="submit">Save</button>
          <button type="button" onClick={handleStopEditingClick}>
            Stop Editing
          </button>
        </form>
      ) : (
        <p>
          {title} - {hoursPlayed} hours played <br></br>released on {releaseDate} My rating: {rating} {" "}
          <span>
            <button onClick={handleStartEditingClick}>Rename</button>
            <button onClick={handleDeleteClick}>Delete</button>
          </span>
        </p>
      )}
    </div>
  )
}