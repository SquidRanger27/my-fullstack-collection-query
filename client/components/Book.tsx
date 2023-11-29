import { deleteBookApi, getBookByIdApi } from '../apis/api'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { BookData } from '../../models/books'
import { useParams, Link, useNavigate } from 'react-router-dom'

export function Book(){
  const { id } = useParams()

  const queryClient = useQueryClient()

  const deleteBookMutation  = useMutation({
    mutationFn: deleteBookApi,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey:['books']})
    },
  })

  function handleDelete(){
    console.log(id)
    deleteBookMutation.mutate(parseInt(id))
  }


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

  
  
 
  return(
    <>
      <div className="bookDetails">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.genre}</p>
      </div>
      <button onClick={handleDelete}>Delete this Book</button>
    </>
  )
}