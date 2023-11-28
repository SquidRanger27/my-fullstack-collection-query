import { NewBook } from '../../models/book'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBookApi } from '../apis/book'

interface Props {
  id: number
}

export default function BookDelete({ id }: Props) {
  console.log('id', id)
  const queryClient = useQueryClient()

  const deleteBookMutation = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })

  function handleDeleteClick() {
    deleteBookMutation.mutate(id)
    console.log('deleting', id)
  }

  return (
    <span>
      <p>
        <button onClick={handleDeleteClick}>Delete</button>
      </p>
    </span>
  )
}
