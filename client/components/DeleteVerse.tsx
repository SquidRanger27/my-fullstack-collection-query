import { getAllVerses } from '../apis/verses'
import { useQuery } from '@tanstack/react-query'
import VerseListItem from './VerseListItem'

export default function VerseList() {
  // TODO: fetch the list of pokemon from the server
  const {
    data: verse,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['verse'],
    queryFn: () => getAllVerses(),
  })

  if (isError) {
    return <p>There is an error!</p>
  }

  if (!verse || isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>Essential Verses</h2>
      {verse.map((p) => (
        <VerseListItem key={p.id} id={p.id} verse={p.verse} />
      ))}
    </div>
  )
}
