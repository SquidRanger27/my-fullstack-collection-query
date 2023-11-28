import { useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useNavigate } from 'react-router-dom'
import { Destination, DestinationInput } from '../../models/destinationModel'

function DestinationForm() {
  const [text, setText] = useState({
    name: '',
    description: '',
  })

  const [fileData, setFileData] = useState({ image: '' })

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const addDestinationMutation = useMutation<
    Destination,
    Error,
    { destination: DestinationInput; id: number }
  >((data) => api.addDestination(data.destination, data.id), {
    onSuccess: async () => {
      queryClient.invalidateQueries(['destination'])
      navigate('/')
    },
  })

  const handlesubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()
    const formData = new FormData()
    formData.append('name', text.name)
    formData.append('description', text.description)
    formData.append('image', fileData.image)
  }

  return (
    <>
      <form onSubmit={handlesubmit} encType="multipart/form-data">
        <label htmlFor="name">Destination Name:</label>
        <input type="text" id="name" value={destination.name} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={destination.description} />
        <label htmlFor="image">Upload Image:</label>
        <input type="file" id="image" accept="image/png, image/jpeg" />
      </form>
    </>
  )
}
