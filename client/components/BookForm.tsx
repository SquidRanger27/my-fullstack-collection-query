import { ChangeEvent, FormEvent, useState } from 'react'
import { Book, NewBook } from '../../models/book'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addBookApi } from '../apis/book'

const initialFormData = {
  author_name: '',
  book_title: '',
  series_title: '',
  entry_number: '',
}

export default function BookForm() {
  const [form, setForm] = useState<NewBook>(initialFormData)
  const queryClient = useQueryClient()

  const bookMutation = useMutation({
    mutationFn: addBookApi,
    onSuccess: async (newBook) => {
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

  //
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    bookMutation.mutate(form)
    setForm(initialFormData)
  }
  //
  if (bookMutation.isLoading) {
    return <div>Adding your books</div>
  }
  return (
    <form onSubmit={handleSubmit} aria-label="Add Book Form">
      <p>
        <label htmlFor="author_name">Author Name:</label>
        <br />
        <input
          id="author_name"
          onChange={handleChange}
          value={form.authorName}
          name="author_name"
        />
      </p>

      <p>
        <label htmlFor="book_title">Book Title:</label>
        <br />
        <input
          id="book_title"
          onChange={handleChange}
          value={form.bookTitle}
          name="ratingbook_title"
        />
      </p>
      <p>
        <label htmlFor="series_title">Series Title:</label>
        <br />
        <input
          id="series_title"
          onChange={handleChange}
          value={form.seriesTitle}
          name="series_title"
        />
      </p>
      <p>
        <label htmlFor="entry_number">Entry Number:</label>
        <br />
        <input
          id="entry_number"
          onChange={handleChange}
          value={form.entryNumber}
          name="entry_number"
        />
      </p>

      <button>Add Book</button>
    </form>
  )
}
