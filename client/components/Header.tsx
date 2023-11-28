
import { Link } from "react-router-dom"

export default function Header() {


  return (
    <>
      <div>
        <p>
            <Link to={'/'}>Home</Link> | <Link to={'/addmovie'}> Add a Movie</Link>
        </p>
      </div>
    </>
  )
}