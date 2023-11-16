import { Link } from 'react-router-dom'

export function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Link to="/movies">Click here to see the movie list</Link>
      </section>
    </>
  )
}

export default App
