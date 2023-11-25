import { useQuery } from '@tanstack/react-query'
import * as nz from '../apis/apiClient'

function HomePage() {
  const {
    data: places,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['places'], queryFn: nz.getAllPlaces })
  if (isError) {
    return <p>Cannot get to your destination...</p>
  }
  if (!places || isLoading) {
    return <p>Taking off...</p>
  }

  return (
    <>
      <h2>New Zealand Places</h2>
      <div>
        {places.map((place) => {
          return (
            <div key={place.id}>
              <h3>{place.name}</h3>
              <p>{place.description}</p>
              <img src={place.image} alt={place.name} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default HomePage
