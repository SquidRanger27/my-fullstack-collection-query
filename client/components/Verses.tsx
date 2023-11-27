import { Verse } from '../../models/verse.ts'
import { getAllVerses } from '../apis/verses.ts'
import { useQuery } from '@tanstack/react-query'
import VerseListItem from './VerseListItem.tsx'
import { handleDeleteClick } from './VerseListItem.tsx'

export default function Verses(verses) {
  const {
    data: pokemon,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['verse'],
    queryFn: () => getAllVerses(),
  })

  if (isError) {
    return <p>Whoopsie! There was an error!</p>
  }

  if (!pokemon || isLoading) {
    return <p>Loading...</p>
  }
  return (
    <>
      <div className="profile">
        <div className="topic">
          <h2>Topic: {verses.description}</h2>
        </div>
        <div className="verse">
          <h3>Verse: {verses.verse}</h3>
        </div>
        <span>
          <button type="button" onClick={handleDeleteClick}>
            Delete
          </button>
        </span>
      </div>
    </>
  )
}
