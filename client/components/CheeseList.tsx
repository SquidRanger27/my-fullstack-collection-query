import { getCheesesApi } from '../apiClient'
import { Cheese } from '../../models/cheese'
import PacmanLoader from 'react-spinners/PacmanLoader'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, useEffect } from 'react'

export default function CheeseList() {
  const queryClient = useQueryClient()

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
              <b>Rating (out of a possible 10 Goldblums): </b>{' '}
              {c.rating_out_of_a_possible_10_Goldblums}
            </li>
          </ul>
        ))}
      </div>
    </>
  )
}
