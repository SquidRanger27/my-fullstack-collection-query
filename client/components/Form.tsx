import { FormEvent } from 'react'

export function Form() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
  }

  return (
    <div className="Movie">
      <h3>Add Movie</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Movie Name
          <br />
          <input type="text" name="name" required={true} />
          <br />
        </label>
        <br />
        <label>
          Director
          <br />
          <input type="text" name="director" required={true} />
          <br />
        </label>
        <br />
        <label>
          Image
          <br />
          <input type="text" name="image" required={true} />
          <br />
        </label>
        <br />
        <input type="submit" name="submit" />
      </form>
    </div>
  )
}
