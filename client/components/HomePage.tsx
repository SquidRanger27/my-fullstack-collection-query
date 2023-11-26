import { useGetAllPlaces } from '../apis/hooks'
import { Link } from 'react-router-dom'

function HomePage() {
  const { data: places, isLoading, isError } = useGetAllPlaces()

  if (isError) {
    return <h2>Cannot get to your destination...</h2>
  }
  if (!places || isLoading) {
    return <h2>Taking off...</h2>
  }

  return (
    <div id="home-page-container">
      <div className="city-container">
        {places.map((place) => (
          <Link
            key={place.id}
            to={`/api/v1/nzplaces/${place.id}`}
            className="city-link"
          >
            <div key={place.id} className="city-card">
              <img src={place.image} alt={place.name} className="city-image" />
              <div className="city-details">
                <h3 className="city-name link-text">{place.name}</h3>
                <p className="link-text">{place.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomePage
