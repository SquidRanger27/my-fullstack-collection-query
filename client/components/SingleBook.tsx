import { Book } from '../../models/book'
import { getSingleBookApi } from '../apis/book'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export default function SingleBook() {
  const { id } = useParams()
  const {
    data: book,
    isError,
    isLoading,
  }: {
    data: Book | undefined
    isError: boolean
    isLoading: boolean
  } = useQuery({
    queryKey: ['books', id],
    queryFn: () => getSingleBookApi(Number(id)),
  })

  if (isError) {
    return <p>The books have been pilfered! Ho hum!</p>
  }
  if (!book || isLoading) {
    return <p>Collecting book from the shelf...</p>
  }

  return (
    <>
      <h1 id="single-book-title">{book.bookTitle}</h1>
      <div>
        <p>
          <strong>Author:</strong> {book.authorName}
        </p>
        <p>
          <strong>Title:</strong> {book.bookTitle}
        </p>
        <p>
          <strong>Series:</strong> {book.seriesTitle}
        </p>
        <p>
          <strong>Volume:</strong> {book.entryNumber}
        </p>
      </div>
    </>
  )
}
