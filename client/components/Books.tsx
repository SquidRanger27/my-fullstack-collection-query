import { getBooksApi } from '../apis/api'
import { useQuery } from '@tanstack/react-query'
import { BookData } from '../../models/books'
import { Link } from 'react-router-dom'

export function Books() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['books'], queryFn: getBooksApi })
  if (isLoading) {
    return 'Loading...'
  }
  if (isError) {
    return 'Broken'
  }
  return (
    <>
      <div className="bookListContainer">
        {books?.map((books: BookData) => {
          return (
              <li key={books.id}>
                <button className="linkButton">
                  <Link to={`/books/${books.id}`}>{books.title}</Link>
                </button>
               </li>
          )
        })}
      </div>
    </>
  )
}
