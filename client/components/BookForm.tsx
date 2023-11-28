import { ChangeEvent, FormEvent, useState } from 'react'
import { Book, NewBook } from '../../models/book'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBookApi } from '../apis/book'

const initialFormData = {
  authorName: '',
  bookTitle: '',
  seriesTitle: '',
  entryNumber: 0,
} as NewBook

export default function BookForm() {
  const [form, setForm] = useState<NewBook>(initialFormData)
  const queryClient = useQueryClient()

  // const deleteBookMutation = useMutation({
  //   mutationFn: deleteBookApi,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ['books'] })
  //   },
  // })

  const bookMutation = useMutation({
    mutationFn: addBookApi,
    onSuccess: async (newBook) => {
      console.log('New Book', newBook)
      setForm(initialFormData)
      const currentBooks: Book[] | undefined = queryClient.getQueryData([
        'book',
      ])
      if (currentBooks) {
        queryClient.setQueryData(['books'], [...currentBooks, newBook])
      } else {
        queryClient.invalidateQueries({ queryKey: ['book'] })
      }
    },
  })

  // function handleDeleteClick() {
  //   deleteBookMutation.mutate({ id })
  //   console.log('deleting', id)
  // }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    console.log('name', name)
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    bookMutation.mutate(form)
  }

  if (bookMutation.isLoading) {
    return <div>Adding your books</div>
  }
  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Add Book Form">
        <p>
          <label htmlFor="authorName">Author Name:</label>
          <br />
          <input
            id="authorName"
            onChange={handleChange}
            value={form.authorName}
            name="authorName"
          />
        </p>

        <p>
          <label htmlFor="bookTitle">Book Title:</label>
          <br />
          <input
            id="bookTitle"
            onChange={handleChange}
            value={form.bookTitle}
            name="bookTitle"
          />
        </p>
        <p>
          <label htmlFor="seriesTitle">Series Title:</label>
          <br />
          <input
            id="seriesTitle"
            onChange={handleChange}
            value={form.seriesTitle}
            name="seriesTitle"
          />
        </p>
        <p>
          <label htmlFor="entryNumber">Entry Number:</label>
          <br />
          <input
            id="entryNumber"
            onChange={handleChange}
            value={form.entryNumber}
            name="entryNumber"
          />
        </p>

        <button>Add Book</button>
      </form>
      <span><p>
        <button onClick={handleDeleteClick}>Delete</button>
      </p></span>
    </>
  )
}
