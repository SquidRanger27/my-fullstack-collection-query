import { useQuery } from '@tanstack/react-query'
import * as nz from '../apis/apiClient'

function HomePage() {
  const {
    data: places,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['places'], queryFn: nz.getAllPlaces })
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
          <div key={place.id} className="city-card">
            <img src={place.image} alt={place.name} className="city-image" />
            <div className="city-details">
              <h3 className="city-name">{place.name}</h3>
              <p>{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage
