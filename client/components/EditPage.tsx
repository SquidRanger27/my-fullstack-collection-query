import { ChangeEvent, useState } from 'react'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiClient'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetDestination } from '../apis/hooks/hooks'

function EditPage() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const { cityId } = useParams<{ cityId?: string }>()
  const parsedCityId = cityId ? Number(cityId) : undefined

  const [text, setText] = useState({
    name: '',
    description: '',
  })

  const editDestinationMutation = useMutation(
    async (data: { destination: FormData; NZPlaceId: number }) => {
      return api.updateDestination(data)
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(['destination'])
        navigate(`/destination/${parsedCityId}`)
      },
    }
  )

  const [fileData, setFileData] = useState<File | null>(null)

  const {
    data: destination,
    isLoading: destinationLoading,
    isError: destinationError,
  } = useGetDestination(parsedCityId as number)

  if (destinationLoading) {
    return <p>Loading...</p>
  }

  if (destinationError) {
    return <p>Error loading city details</p>
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    setFileData(file as File)
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    const formData = new FormData()
    formData.append('name', text.name)
    formData.append('description', text.description)
    if (fileData) {
      formData.append('image', fileData)
    }
    formData.append('NZPlaceId', String(parsedCityId))

    const destinationData = {
      destination: formData,
      NZPlaceId: Number(parsedCityId),
    }

    console.log(destinationData)
    editDestinationMutation.mutate(destinationData)
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
      <h2 className="center">You are editing:</h2>
      <div id="home-page-container">
        <div className="center">
          {destination.map((d) => (
            <div key={d.id} className="edit-card">
              <img src={`${d.image}`} alt={d.name} className="city-image" />
              <div className="city-details">
                <h3 className="city-name link-text">{d.name}</h3>
                <p className="link-text">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="destination-container">
        <form
          onSubmit={handleSubmit}
          method="POST"
          encType="multipart/form-data"
          className="destination-form"
        >
          <label htmlFor="name">Destination Name:</label>
          <input
            className="form-input"
            type="text"
            id="name"
            value={text.name}
            onChange={handleChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-input"
            id="description"
            value={text.description}
            onChange={handleChange}
          />
          <label htmlFor="file">Upload Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
          />
          <div>
            <button type="submit" className="submit">
              Submit
            </button>
            <button
              className="submit"
              onClick={() => {
                navigate(`/destination/${parsedCityId}`)
              }}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditPage
