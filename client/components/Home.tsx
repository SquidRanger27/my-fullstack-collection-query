import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <h1 className="main-title">My books!</h1>

      <div id="buttons-container">
        <button className="books-button">
          <Link style={{ textDecoration: 'none' }} to="/books">
            Book List
          </Link>
        </button>
      </div>
    </>
  )
}
