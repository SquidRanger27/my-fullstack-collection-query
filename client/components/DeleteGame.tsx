import { useMutation, useQueryClient } from '@tanstack/react-query' 
import { deleteGameApi } from '../apis/game'

interface Props {
    id: number
  }
  
  export default function DeleteGame({ id }: Props) {
    console.log('id', id)
    const queryClient = useQueryClient()
  
    const deleteGameMutation = useMutation({
      mutationFn: deleteGameApi,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['games'] })
      },
      onError: (error) => {
        console.error('Error deleting game:', error);
      },
    })
  
    function handleDeleteClick() {
      deleteGameMutation.mutate(id)
      console.log('deleting', id)
    }
  
    return (
        <span>
          <p>
            <button onClick={handleDeleteClick} disabled={deleteGameMutation.isLoading}>
              {deleteGameMutation.isLoading ? 'Deleting...' : 'Delete'}
            </button>
          </p>
        </span>
      );
  }