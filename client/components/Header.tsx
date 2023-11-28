import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <button>
          <Link to={'/'}>Home</Link>
        </button>
      </nav>
    </header>
  )
}
