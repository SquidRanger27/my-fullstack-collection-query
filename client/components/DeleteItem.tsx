import { useMutation, useQueryClient } from '@tanstack/react-query'

import { Item } from '../../models/items'
import { deleteItem } from '../apis/apiClient'

export default function DeleteItem({ id }: Item) {
  const queryClient = useQueryClient()

  const deleteItemMutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
    },
  })

  const handleDeleteClick = () => {
    deleteItemMutation.mutate({ id } as Item)
  }

  return (
    <div>
      <button
        className="delete-button"
        aria-label="Delete Item"
        onClick={handleDeleteClick}
      >
        Delete
      </button>
    </div>
  )
}
