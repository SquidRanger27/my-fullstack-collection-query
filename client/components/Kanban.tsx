import { getTasks } from '../apis/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { Droppable, Draggable } from 'react-beautiful-dnd'

// export default function Tasks() {
//   const [taskState, setTaskState] = useState({
//     title: '',
//     details: '',
//     isStretch: '',
//     colour: '',
//   })

//   const queryClient = useQueryClient()

//   const {
//     data: tasks,
//     isError,
//     isLoading,
//   } = useQuery({
//     queryKey: ['tasks'],
//     queryFn: () => {
//       return getTasks()
//     },
//   })

//   if (isError) {
//     return <p>Sowwwwy</p>
//   }

//   if (!tasks || isLoading) {
//     return <p>Loading... Hold your horses!</p>
//   }

//   //console.logs

//   console.log(tasks)

//   return (
//     <>
//       <div className="task">
//         {tasks.map((t) => (
//           <ul key={t.id}>
//             testing list
//             {t.title}
//             {t.details}
//           </ul>
//         ))}
//       </div>
//     </>
//   )
// }

import DndList from './TestingDraggable'

export default function Tasks() {
  const [taskState, setTaskState] = useState({
    title: '',
    details: '',
    isStretch: '',
    colour: '',
  })

  const queryClient = useQueryClient()

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
      <DndList items={tasks} />
    </>
  )
}
