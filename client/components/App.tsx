import { useState } from 'react'
import { Form } from './Form'
import { Movies } from './Movies'

function App() {
  const [shouldEdit, setShouldEdit] = useState(0)

  function onShouldEdit(id: number) {
    setShouldEdit(id)
  }

  return (
    <>
      <header className="header">
        <h1>Movies Collection</h1>
      </header>
      <main>
        <Movies shouldEdit={onShouldEdit} />
        <Form shouldEdit={shouldEdit} setShouldEdit={onShouldEdit} />
      </main>
    </>
  )
}

export default App
