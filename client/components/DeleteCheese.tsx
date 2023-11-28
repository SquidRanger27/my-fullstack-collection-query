//DeleteCheese.tsx
import { deleteCheeseApi } from '../api/api-cheeses'
import { useQueryClient, useMutation } from '@tanstack/react-query'

interface Props {
  cheeseId: number
}

export default function DeleteCheese({ cheeseId }: Props) {
  const queryClient = useQueryClient()

  const deleteCheeseMutation = useMutation({
    mutationFn: () => deleteCheeseApi(cheeseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cheese'] })
    },
  })

  const handleDelete = () => {
    deleteCheeseMutation.mutate()
  }

  return (
    <div>
      <button onClick={handleDelete} disabled={deleteCheeseMutation.isLoading}>
        {deleteCheeseMutation.isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}
