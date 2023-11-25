import React, { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NewItem } from '../../models/items'
import { addItem } from '../apis/apiClient'

export default function AddNewItem() {
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [description, setDescription] = useState('')
  const [dateLent, setDateLent] = useState('')

  const queryClient = useQueryClient()

  const addNewItemMutation = useMutation({
    mutationFn: addItem,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['items'] })
    },
  })

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    addNewItemMutation.mutate({
      name: name,
      genre: genre,
      description: description,
      dateLent: dateLent,
    } as NewItem)
    // console.log('submitting')

    // Once add new item button has been clicked, set the state back to an empty input field
    setName('')
    setGenre('')
    setDescription('')
    setDateLent('')
  }

  return (
    <div className="add-form">
      <form onSubmit={handleAddSubmit} aria-label="Add New Item">
        {/* <label htmlFor="name">Name: </label> */}
        Name:
        <input
          aria-label="name"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        {/* <label htmlFor="genre">Genre: </label> */}
        Genre:
        <input
          aria-label="genre"
          type="text"
          value={genre}
          required
          onChange={(e) => setGenre(e.target.value)}
        />
        {/* <label htmlFor="description">Description: </label> */}
        Description:
        <input
          aria-label="description"
          type="text"
          value={description}
          required
          onChange={(e) => setDescription(e.target.value)}
        />
        {/* <label htmlFor="dateLent">Date Lent: </label> */}
        Date Lent:
        <input
          aria-label="dateLent"
          type="text"
          value={dateLent}
          required
          onChange={(e) => setDateLent(e.target.value)}
        />
        <button className="add-button" type="submit">
          Add New Item
        </button>
      </form>
    </div>
  )
}
