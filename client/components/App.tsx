import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <> 
      <header className="header">
      <Link to='/'>Home ---|</Link>
      <Link to='/books/add-book'>|--- Add a book</Link>
        <h1>My Book Collection</h1>
        {/* <Link to="add-book">Add a Book</Link> */}
      </header>
      <section>
        <Outlet/>
      </section>
    </>
  )
}

export default App
