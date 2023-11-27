import { useParams } from 'react-router-dom'
import { useGetPlaceById } from '../apis/hooks'

function DetailPage() {
  const { id } = useParams<{ id?: string }>() // useParams returns an object, so use destructuring
  const parsedId = id ? Number(id) : undefined // parse the id to a number

  const {
    data: cityDetails,
    isLoading: cityDetailsLoading,
    isError: cityDetailsError,
  } = useGetPlaceById({ id: parsedId as number })

  if (cityDetailsLoading) {
    return <p>Loading...</p>
  }

  if (cityDetailsError) {
    return <p>Error loading city details</p>
  }

  return (
    <>
      {cityDetails && (
        <>
          <h1>{cityDetails.name}</h1>
          <p>This is the detail page for {cityDetails.name}.</p>
        </>
      )}
    </>
  )
}

export default DetailPage
