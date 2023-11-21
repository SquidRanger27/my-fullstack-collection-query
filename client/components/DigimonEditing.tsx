import { useState } from 'react'
import { deleteDigimonApi, renameDigimonApi } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { DigimonData, NewDigimonData } from '../../models/digimon'

export default function DigimonEditing({
  id,
  digimonName,
  digimonType,
}: DigimonData) {
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState<NewDigimonData>({
    digimonName,
    digimonType,
  })
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: deleteDigimonApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['digimons'],
      })
    },
  })

  const handleDeleteClick = () => {
    deleteMutation.mutate(id)
  }

  //Can't really make this edit function work
  const renameMutation = useMutation({
    mutationFn: renameDigimonApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['digimons'],
      })
    },
  })

  const handleEditSubmit = (e: any) => {
    e.preventDefault()

    renameMutation.mutate(id, {})
    setEditing(false)
  }

  const handleStopEditingClick = () => {
    setEditing(false)
    setText({
      digimonName,
      digimonType,
    })
  }

  const handleStartEditingClick = () => {
    setEditing(true)
  }

  const handleDigimonNameChange = (e: any) => {
    setText((prevInput) => ({
      ...prevInput,
      digimonName: e.target.value,
    }))
  }

  const handleDigimonTypeChange = (e: any) => {
    setText((prevInput) => ({
      ...prevInput,
      digimonType: e.target.value,
    }))
  }

  //up to here.

  return (
    <div>
      {editing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={text.digimonName}
            onChange={handleDigimonNameChange}
          />

          <input
            type="text"
            value={text.digimonType}
            onChange={handleDigimonTypeChange}
          />
          <button type="submit">Save</button>
          <button type="button" onClick={handleStopEditingClick}>
            Stop Editing
          </button>
        </form>
      ) : (
        <div>
          <button onClick={handleStartEditingClick}>Rename</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  )
}
