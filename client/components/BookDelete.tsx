import { ChangeEvent, FormEvent, useState } from 'react'
import { Book, NewBook } from '../../models/book'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBookApi } from "../apis/book"

export default function BookDelete({ id }: Props) {
  const queryClient = useQueryClient()

  const deleteBookMutation = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })

function handleDeleteClick() {
  deleteBookMutation.mutate({ id })
  console.log('deleting', id)
}

return (
  <span><p>
  <button onClick={handleDeleteClick}>Delete</button>
</p></span>
)
}