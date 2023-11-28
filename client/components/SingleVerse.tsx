import { useParams } from 'react-router-dom'
import { getSingleVerse } from '../apis/verses'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function SingleVerse() {
  const idObj = useParams()
  const id = idObj.id

  const {
    data: singleVerse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['verse', id],
    queryFn: async () => {
      return await getSingleVerse(id)
    },
  })

  if (isError) {
    return <p>Broked!</p>
  }
  if (!singleVerse || isLoading) {
    return <p>Still Loading</p>
  }

  return (
    <>
      <h2>Verse: {singleVerse.verse}</h2>
      <h3>Description: {singleVerse.description}</h3>
      <Link to="/">Home</Link>
    </>
  )
}
