import { useState } from 'react'
import { addDigimonApi } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { NewDigimonData } from '../../models/digimon'

export default function AddDigimonForm() {
  const [formInput, setFormInput] = useState<NewDigimonData>({
    digimonName: '',
    digimonType: '',
  })

  const queryClient = useQueryClient()

  const addDigimonMutation = useMutation(addDigimonApi, {
    onSuccess: () => {
      queryClient.invalidateQueries(['digimons'])
      //digimons refers to the table of the database i assume
      setFormInput({ digimonName: '', digimonType: '' })
    },
  })

  const handleAddSubmit = (e: any) => {
    e.preventDefault()
    addDigimonMutation.mutate(formInput)
  }

  //formInput is angry. Need help

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }))
  }

  return (
    <form onSubmit={handleAddSubmit}>
      <label htmlFor="addDigimonName">
        Digimon Name:{' '}
        <input
          type="text"
          name="digimonName"
          value={formInput.digimonName}
          onChange={handleInputChange}
          placeholder="Enter Digimon Name"
        />
      </label>
      <br />

      <label htmlFor="addDigimonType">
        Digimon Type:{' '}
        <input
          type="text"
          name="digimonType"
          value={formInput.digimonType}
          onChange={handleInputChange}
          placeholder="Enter Digimon Type"
        />
      </label>
      <br />
      <br />
      <button type="submit">Add New Digimon</button>
    </form>
  )
}
