import { useParams, Link } from 'react-router-dom'
import { useGetAllPlaces, useGetDestination } from '../apis/hooks/hooks'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import * as api from '../apis/apiClient'

function DetailPage() {
  const { cityId } = useParams<{ cityId?: string }>()
  const parsedId = cityId ? Number(cityId) : undefined
  const queryClient = useQueryClient()

  const deleteMutation = useMutation(
    async (id: number) => {
      return api.deleteDestination(id)
    },
    {
      onSuccess: async () => {
        queryClient.invalidateQueries(['destination'])
      },
    }
  )

  const handleDeleteClick = (id: number) => {
    deleteMutation.mutate(id)
  }

  const {
    data: city,
    isLoading: cityLoading,
    isError: cityError,
  } = useGetAllPlaces()

  const {
    data: destination,
    isLoading: destinationLoading,
    isError: destinationError,
  } = useGetDestination(parsedId as number)

  if (cityLoading || destinationLoading) {
    return <p>Loading...</p>
  }

  if (cityError || destinationError) {
    return <p>Error loading city details</p>
  }

  const selectedCity = city?.find((c) => c.id === parsedId)

  return (
    <>
      {selectedCity && destination && (
        <>
          <h1 key={selectedCity.id} id="detail-page-title">
            {selectedCity.name}
          </h1>
          <div className="center">
            <Link to={`/destination/${parsedId}/add`}>
              <button className="add-button">Add a destination</button>
            </Link>
          </div>
          <div id="home-page-container">
            <div className="city-container">
              {destination.map((d) => (
                <div key={d.id} className="city-card">
                  <img src={`${d.image}`} alt={d.name} className="city-image" />
                  <div className="city-details">
                    <h3 className="city-name link-text">{d.name}</h3>
                    <p className="link-text">{d.description}</p>
                    <button
                      className="right"
                      onClick={() => handleDeleteClick(d.id)}
                    >
                      Delete
                    </button>
                    <Link to={`/destination/${parsedId}/edit/${d.id}`}>
                      <button className="right">Edit</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default DetailPage
