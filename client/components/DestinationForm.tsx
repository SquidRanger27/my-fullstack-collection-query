import { ChangeEvent, useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useNavigate, useParams } from 'react-router-dom'
import { Destination, DestinationInput } from '../../models/destinationModel'

function DestinationForm() {
  const { cityId } = useParams<{ cityId?: string }>()

  const parsedCityId = cityId ? Number(cityId) : undefined

  const [text, setText] = useState({
    name: '',
    description: '',
  })

  const [fileData, setFileData] = useState<{ image: string | File | FormData }>(
    { image: '' }
  )

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const addDestinationMutation = useMutation(
    async (data: { destination: DestinationInput; NZPlaceId: number }) => {
      return api.addDestination(data)
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(['destination'])
        navigate(`/destination/${parsedCityId}`)
      },
    }
  )

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    const formData = new FormData()
    formData.append('image', file || '')

    setFileData((prevFileData) => ({
      ...prevFileData,
      image: formData,
    }))
  }

  const handlesubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', text.name)
    formData.append('description', text.description)
    formData.append('image', fileData.image)

    const destinationData = {
      destination: formData,
      NZPlaceId: Number(parsedCityId),
    }

    addDestinationMutation.mutate(destinationData)
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target
    setText((prevText) => ({
      ...prevText,
      [id]: value,
    }))
  }

  return (
    <>
      <form onSubmit={handlesubmit} method="POST" encType="multipart/form-data">
        <label htmlFor="name">Destination Name:</label>
        <input
          type="text"
          id="name"
          value={text.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={text.description}
          onChange={handleChange}
        />
        <label htmlFor="image">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default DestinationForm
