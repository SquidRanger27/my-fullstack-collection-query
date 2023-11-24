import { Link } from 'react-router-dom'

function AddCharacter() {
  return (
    <>
      <div className="character add">
        <Link to="./add">+</Link>
      </div>
    </>
  )
}

export default AddCharacter
