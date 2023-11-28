import { useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function SingleVerse() {
  const idObj = useParams()
  const id = idObj.id

  return (
    <>
      <p>Something</p>
      <Outlet />
    </>
  )
}
