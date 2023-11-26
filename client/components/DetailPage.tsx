import { useParams } from 'react-router-dom'
import { useGetPlaceById } from '../apis/hooks'

function DetailPage() {
  const { id } = useParams<{ id?: string }>() // useParams returns an object, so use destructuring
  const parsedId = id ? Number(id) : undefined // parse the id to a number
  const {
    data: cityDetails,
    isLoading,
    isError,
  } = useGetPlaceById({ id: parsedId as number })

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
