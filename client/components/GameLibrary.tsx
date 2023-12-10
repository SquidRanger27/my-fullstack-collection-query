import { Link } from 'react-router-dom'

export default function GameLibrary() {
  return (
    <>
      <h1 className="main-title">My Games Library</h1>

      <div id="buttons-container">
        <Link style={{ textDecoration: 'none' }} to="/games">
          Games List
        </Link>
      </div>
    </>
  )
}