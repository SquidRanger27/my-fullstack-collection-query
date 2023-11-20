//UpdateCheese.tsx
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCheeseApi } from '../apiClient'

interface Props {
  cheeseId: number
}

export default function UpdateCheese({ cheeseId }: Props) {
  const [editing, setEditing] = useState(false)
  const queryClient = useQueryClient()

  const updateCheeseMutation = useMutation({
    mutationFn: updateCheeseApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cheese'] })
    },
  })

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      await updateCheeseMutation.mutateAsync(cheeseId)
      setEditing(false)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <form onSubmit={handleEditSubmit} method="PATCH">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="updatedName"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="updatedDescription"
          value={formData.description}
          onChange={handleInputChange}
        />

        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          name="updatedComment"
          value={formData.comment}
          onChange={handleInputChange}
        />

        <label htmlFor="rating_out_of_a_possible_10_Goldblums">
          Rating out of a possible 10 Goldblums:
        </label>
        <input
          id="rating_out_of_a_possible_10_Goldblums"
          type="text"
          name="updatedRating_out_of_a_possible_10_Goldblums"
          value={formData.rating_out_of_a_possible_10_Goldblums}
          onChange={handleInputChange}
        />
        <button type="submit" className="edit">
          Update
        </button>
      </form>
    </div>
  )
}
