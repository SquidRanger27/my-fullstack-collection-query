import React, { useState } from 'react'
import GameForm from './GameForm'

interface AddGameButtonProps {
  refetchGames: () => Promise<void>
}

const AddGameButton: React.FC<AddGameButtonProps> = ({ refetchGames }) => {
  const [showForm, setShowForm] = useState(false)

  const handleToggleForm = () => {
    setShowForm((prev) => !prev)
  }

  const handleSuccess = () => {
    // Trigger a refetch to get the latest data
    refetchGames()
    // Close the form
    setShowForm(false)
  }

  return (
    <div>
      <button onClick={handleToggleForm}>Add Game</button>
      {showForm && (
        <GameForm onSuccess={handleSuccess} refetchGames={refetchGames} />
      )}
    </div>
  )
}

export default AddGameButton
