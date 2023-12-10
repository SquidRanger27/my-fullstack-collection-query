import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav>
        <button>
          <Link to={'/'}>Game Library</Link>
        </button>
      </nav>
    </header>
  )
}