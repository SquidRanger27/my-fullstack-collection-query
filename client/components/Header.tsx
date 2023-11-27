import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          <Link to={'books'}>Books</Link>
        </button>
      </nav>
    </header>
  )
}
