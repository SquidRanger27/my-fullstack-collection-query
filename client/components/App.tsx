import { Form } from './Form'
import { Movies } from './Movies'

function App() {
  return (
    <>
      <header className="header">
        <h1>Movies Collection</h1>
      </header>
      <main>
        <Movies />
        <Form />
      </main>
    </>
  )
}

export default App
