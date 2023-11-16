import { Link, Outlet } from 'react-router-dom'

export function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Link to="/movies">Click here to see my movie list</Link>
        <Outlet />
      </section>
    </>
  )
}

export default App
