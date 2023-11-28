import { useParams } from 'react-router-dom'
import { useGetAllPlaces, useGetDestination } from '../apis/hooks/hooks'

function DetailPage() {
  const { id } = useParams<{ id?: string }>() // useParams returns an object, so use destructuring
  const parsedId = id ? Number(id) : undefined // parse the id to a number

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
            <button className="add-button">Add a destination</button>
          </div>
          <div id="home-page-container">
            <div className="city-container">
              {destination.map((d) => (
                <div key={d.id} className="city-card">
                  <img
                    src={`/${d.image}`}
                    alt={d.name}
                    className="city-image"
                  />
                  <div className="city-details">
                    <h3 className="city-name link-text">{d.name}</h3>
                    <p className="link-text">{d.description}</p>
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
