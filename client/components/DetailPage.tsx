import { useParams } from 'react-router-dom'
import { usePlaceDetails } from '../apis/hooks/usePlaceDetails'

function DetailPage() {
  const { id } = useParams<{ id?: string }>() // useParams returns an object, so use destructuring
  const parsedId = id ? Number(id) : undefined // parse the id to a number

  const { cityDetails, destination, loading, error } = usePlaceDetails(parsedId)
  console.log(destination)

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error loading city details</p>
  }

  return (
    <>
      {cityDetails && destination && (
        <>
          <h1>{cityDetails.name}</h1>
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
