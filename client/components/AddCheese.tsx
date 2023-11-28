//AddCheese.tsx Component

import { useState } from 'react'
import { NewCheese } from '../../models/cheese'
import { addCheeseApi } from '../api/api-cheeses'
import { useQueryClient, useMutation } from '@tanstack/react-query'

const emptyCheese: NewCheese = {
  name: '',
  description: '',
  comment: '',
  rating: 0,
}

export default function AddCheese() {
  const queryClient = useQueryClient()
  const [formData, setFormData] = useState(emptyCheese)

  const addCheeseMutation = useMutation({
    mutationFn: addCheeseApi,
    onSuccess: () => {
      queryClient.invalidateQueries(['cheese'])
      setFormData(emptyCheese)
    },
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      addCheeseMutation.mutate(formData)
    } catch (error: any) {
      console.log(error.message)
    }
  }
  const handleInputChange = async (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <div>
        <h1>Add a cheese to your collection</h1>
      </div>
      <form action="/" onSubmit={handleSubmit} method="POST">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />

        <label htmlFor="comment">Comment:</label>
        <input
          id="comment"
          type="text"
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        />

        <label htmlFor="rating">Rating out of a possible 10 Goldblums:</label>
        <input
          id="rating"
          type="text"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <button type="submit" className="add">
          Add
        </button>
      </form>
    </>
  )
}
