import { getTasks } from '../apis/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import DndList from './DndList'

export default function Tasks() {
  // const [taskState, setTaskState] = useState({
  //   title: '',
  //   details: '',
  //   isStretch: '',
  //   colour: '',
  // })

  const {
    data: tasks,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => {
      return getTasks()
    },
  })

  if (isError) {
    return <p>Sorry, an error occurred.</p>
  }

  if (!tasks || isLoading) {
    return <p>Loading... Hold your horses!</p>
  }

  // Now, you can use the DndList component to render draggable items
  return (
    <>
      <DndList items={tasks || []} />
    </>
  )
}
