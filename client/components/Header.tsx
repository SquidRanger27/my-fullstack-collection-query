import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <div></div>
      <nav>
        <span>
          <Link to={'/'}>Home</Link>
        </span>
      </nav>
    </header>
  )
}
