import { getCheesesApi } from '../api/api-cheeses'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useQuery } from '@tanstack/react-query'
import DeleteCheese from './DeleteCheese'
import UpdateCheese from './UpdateCheese'

export default function CheeseList() {
  const {
    data: cheese,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['cheese'],
    queryFn: () => {
      return getCheesesApi()
    },
  })

  if (isError) {
    return <p>Gouda grief! Parmesan the error...</p>
  }

  if (!cheese || isLoading) {
    return <PacmanLoader />
  }

  console.log(cheese)

  return (
    <>
      <div className="cheese-list">
        {cheese.map((c) => (
          <ul key={c.id}>
            <li>
              <b>Name:</b> {c.name} <br />
              <br />
              <b> Description:</b> {c.description} <br />
              <br />
              <b>Comment:</b> {c.comment} <br />
              <br />
              <b>Rating (out of a possible 10 Goldblums): </b> {c.rating}
              <DeleteCheese cheeseId={c.id} />
              <UpdateCheese cheeseId={c.id} />
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}
