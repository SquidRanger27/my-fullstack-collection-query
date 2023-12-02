import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBookApi } from '../apis/api'
import { Book } from '../../models/books'

const emptyForm = {
  title: '',
  author: '',
  genre: '',
} as Book

export function BookCreate() {
  const [details, setDetails] = useState<Book>(emptyForm)
  const queryClient = useQueryClient()

  const addBookMutation = useMutation({
    mutationFn: addBookApi,
    onSuccess: async (newBook) => {
      setDetails(emptyForm)
      queryClient.invalidateQueries({queryKey:['books']})
    },
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const key = e.target.id
    const stateObj = {
      ...details,
      [key]: e.target.value,
    }
    setDetails(stateObj)
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault()
    addBookMutation.mutate(details)
  }

  return (
    <>
      <div className="create">
        <form style={{ display: 'flex', flexDirection: 'column' }} method="post" onSubmit={handleSubmit} aria-label="Add Book Form">
          <label htmlFor="title">Book Title:</label>
          <input 
            type="text"
            value={details.title}
            id="title"
            onChange={handleChange}
            required
          />
          <label htmlFor="author">Book Author:</label>
          <input 
            type="text"
            value={details.author}
            id="author"
            onChange={handleChange}
            required
          />
          <label htmlFor="genre">Book Genre:</label>
          <input 
            type="text"
            value={details.genre}
            id="genre"
            onChange={handleChange}
            required
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  )
}