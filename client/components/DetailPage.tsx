import { useParams } from 'react-router-dom'
import { useGetPlaceById } from '../apis/hooks'

function DetailPage() {
  const { id } = useParams()
  const { data: cityDetails, isLoading, isError } = useGetPlaceById(id)

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error loading city details</p>
  }

  return (
    <>
      {cityDetails && (
        <>
          <h1>{cityDetails.name}</h1>
          <p>This is the detail page for {cityDetails.name}.</p>
          {/* Add more details as needed */}
        </>
      )}
    </>
  )
}

export default DetailPage
