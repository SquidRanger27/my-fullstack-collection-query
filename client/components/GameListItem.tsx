import React, { useState } from 'react'
import UpdateForm from './UpdateForm'

interface Game {
  id: number
  title: string
  developer: string
  year: number
}

interface GameListItemProps {
  game: Game
  onDelete: (gameId: number) => void
}

const GameListItem: React.FC<GameListItemProps> = ({ game, onDelete }) => {
  const [editMode, setEditMode] = useState(false)

  const handleDeleteClick = async () => {
    await onDelete(game.id)
  }

  const handleEditClick = () => {
    setEditMode(true)
  }

  return (
    <div>
      <h3>{game.title}</h3>
      <p>Developer: {game.developer}</p>
      <p>Year Released: {game.year}</p>
      {editMode ? (
        <UpdateForm game={game} setEditMode={setEditMode} />
      ) : (
        <>
          <button onClick={handleEditClick}>Edit Game</button>
          <button onClick={handleDeleteClick}>Delete Game</button>
        </>
      )}
    </div>
  )
}

export default GameListItem
