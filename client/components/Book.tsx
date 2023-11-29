import { deleteBookApi, getBookByIdApi } from '../apis/api'
import { useQuery, useMutation } from '@tanstack/react-query'
import { BookData } from '../../models/books'
import { useParams, Link } from 'react-router-dom'

export function Book(){
  const { id } = useParams()

  const deleteBookMutation  = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      
    },
  })

  const {
    data: book,
    isError,
    isLoading,
  }: {
    data: BookData | undefined,
    isError: boolean,
    isLoading: boolean
  } = useQuery({
    queryKey: ['books', id],
    queryFn: () => getBookByIdApi(Number(id)),
  })
  if (!book || isLoading) {
    return 'Loading...'
  }
  if (isError) {
    return 'error cannot find'
  }

  
  
  function handleDelete(){
    deleteBookMutation.mutate(parseInt(id))
  }

  return(
    <>
      <div className="bookDetails">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.genre}</p>
      </div>
      <button submit={handleDelete}>Delete this Book</button>
    </>
  )
}