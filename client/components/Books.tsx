import { getBooksApi } from '../apis/book'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

export default function BookList() {
  const {
    data: books,
    error,
    isLoading,
  } = useQuery({ queryKey: ['books'], queryFn: getBooksApi })

  if (error) {
    return <p>The books have been pilfered! Ho hum!</p>
  }
  if (!books || isLoading) {
    return <p>Collecting book from the shelf...</p>
  }

  return (
    <>
      <div>
        <h1 id="bookTitle">Books I have Read</h1>
        <ul id="bookList">
          {books.map((book) => (
            <li key={book.id}>
              <div className="bookBox">
                <button className="linkButton">
                  <Link to={`/book/${book.id}`}>{book.bookTitle}</Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
