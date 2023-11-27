import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBookApi } from '../apis/api'
import { Book } from '../../models/books'

export function BookCreate() {
  const [text, setText] = useState({} as Book)
  const queryClient = useQueryClient()

  const addBookMutation = useMutation({
    mutationFn: addBookApi,
    onSuccess: async () => {
      queryClient.invalidateQueries({queryKey:['books']})
      setText({
        title: '',
        author: '',
        genre: '',
      } as Book)
    },
  })

  function handleChange(e: { target: { id: string; value: string } }) {
    const key = e.target.id
    const stateObj = {
      ...text,
      [key]: e.target.value,
    }
    console.log(stateObj)
    setText(stateObj)
  }

  return (
    <>
      <div className="create">
        <form style={{ display: 'flex', flexDirection: 'column' }} method="post" onSubmit={() => {
          addBookMutation.mutate({text})
        }}>
          <label htmlFor="bookName">Book Title</label>
          <input 
            className="nameInput"
            type="text"
            value={text.title}
            id="bookName"
            onChange={handleChange}
            required
          />
          <label htmlFor="bookAuthor">Book Author</label>
          <input 
            className="nameInput"
            type="text"
            value={text.author}
            id="bookAuthor"
            onChange={handleChange}
            required
          />
          <label htmlFor="bookGenre">Book Genre</label>
          <input 
            className="nameInput"
            type="text"
            value={text.genre}
            id="bookGenre"
            onChange={handleChange}
            required
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    </>
  )
}