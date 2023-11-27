//UpdateCheese.tsx
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateCheeseApi } from '../apiClient'

interface Props {
  cheeseId: number
}

export default function UpdateCheese({ cheeseId }: Props) {
  const [editing, setEditing] = useState(false)
  const [updateCheeseForm, setUpdateCheeseForm] = useState({
    name: '',
    description: '',
    comment: '',
    rating: 0,
  })
  const queryClient = useQueryClient()

  const updateCheeseMutation = useMutation({
    mutationFn: () => updateCheeseApi(cheeseId, updateCheeseForm),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cheese'] })
    },
  })

  const fetchCheeseData = async () => {}

  const handleEditSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      updateCheeseMutation.mutate()
      setEditing(false)
    } catch (error: any) {
      console.log(error.message)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setUpdateCheeseForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const handleToggleForm = () => {
    setEditing(!editing)
    if (!editing) {
      setUpdateCheeseForm({
        ...updateCheeseForm,
        name: '',
        description: '',
        comment: '',
        rating: 0,
      })
    }
  }

  return (
    <div>
      <button onClick={handleToggleForm}>
        {editing ? 'Cancel Update' : 'Update this cheese'}
      </button>
      {editing && (
        <form onSubmit={handleEditSubmit} method="PATCH">
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={updateCheeseForm.name}
              onChange={handleInputChange}
              aria-label="name"
            />
          </div>

          <div>
            <label htmlFor="description">Description:</label>
            <input
              id="description"
              type="text"
              name="description"
              value={updateCheeseForm.description}
              onChange={handleInputChange}
              aria-label="description"
            />
          </div>

          <div>
            <label htmlFor="comment">Comment:</label>
            <input
              id="comment"
              type="text"
              name="comment"
              value={updateCheeseForm.comment}
              onChange={handleInputChange}
              aria-label="comment"
            />
          </div>

          <div>
            <label htmlFor="rating">
              Rating out of a possible 10 Goldblums:
            </label>
            <input
              id="rating"
              type="text"
              name="rating"
              value={updateCheeseForm.rating}
              onChange={handleInputChange}
              aria-label="rating"
            />
          </div>
          <button type="submit" className="edit">
            Update
          </button>
        </form>
      )}
    </div>
  )
}
