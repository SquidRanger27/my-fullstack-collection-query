import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { Item } from '../../models/items'
import { editItem } from '../apis/apiClient'

export default function EditItem({ id }: Item) {
  const [genre, setNewGenre] = useState('')
  const [description, setNewDescription] = useState('')
  const [dateLent, setNewDateLent] = useState('')

  const queryClient = useQueryClient()

  const editItemMutation = useMutation({
    mutationFn: editItem,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
    },
  })

  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    editItemMutation.mutate({
      id,
      newGenre: genre,
      newDescription: description,
      newDateLent: dateLent,
    } as EditItems)
    // console.log('submitting')

    setNewGenre('')
    setNewDescription('')
    setNewDateLent('')
  }

  return (
    <div className="edit-form">
      <form onSubmit={handleEditSubmit}>
        <h1>Edit Current Items: </h1>
        {/* <label htmlFor="genre">Genre: </label> */}
        Genre:
        <input
          aria-label="genre"
          type="text"
          value={genre}
          required
          onChange={(e) => setNewGenre(e.target.value)}
        />
        {/* <label htmlFor="description">Description: </label> */}
        Description:
        <input
          aria-label="description"
          type="text"
          value={description}
          required
          onChange={(e) => setNewDescription(e.target.value)}
        />
        {/* <label htmlFor="dateLent">Date Lent: </label> */}
        Date Lent:
        <input
          aria-label="dateLent"
          type="text"
          value={dateLent}
          required
          onChange={(e) => setNewDateLent(e.target.value)}
        />
        <button className="edit-button" type="submit" aria-label="Edit Items">
          Save
        </button>
      </form>
    </div>
  )
}
