import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateGame } from './Api';

interface Game {
  id: number;
  title: string;
  developer: string;
  year: number;
}

interface UpdateFormProps {
  game: Game;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateForm: React.FC<UpdateFormProps> = ({ game, setEditMode }) => {
  const queryClient = useQueryClient();

  const [updatedGame, setUpdatedGame] = useState<Game>({
    id: game.id,
    title: game.title,
    developer: game.developer,
    year: game.year,
  });

  const { mutate } = useMutation(() => updateGame(game.id, updatedGame), {
    onSuccess: (data) => {
      // Update the local state directly without refetching
      queryClient.setQueryData(['games'], (prevGames: Game[] | undefined) => {
        if (prevGames) {
          return prevGames.map((prevGame) =>
            prevGame.id === data.id ? data : prevGame
          );
        }
        return prevGames;
      });

      setEditMode(false);
    },
  });

  const handleUpdate = () => {
    mutate();
  };

  const handleCancel = () => {
    setEditMode(false);
  };

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
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default UpdateForm
