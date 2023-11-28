import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './DndList.css'
import { useEffect, useState } from 'react'

import { delTask } from '../apis/api'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { NewTaskForm } from './NewTaskForm'

export default function DndList({ items }, props: []) {
  // const DndList = ({ items }) => {

  const queryClient = useQueryClient()

  const numberOfColumns = 4

  const [columns, setColumns] = useState(getDefaultColumns())

  useEffect(() => {
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns])

  function getDefaultColumns() {
    const columnNames = ['Backlog', 'ToDos', 'In progress', 'Completed']

    // const storedColumns = JSON.parse(localStorage.getItem('columns'))
    return (
      // storedColumns ||
      Array.from({ length: numberOfColumns }, (_, columnIndex) => ({
        id: `column${columnIndex + 1}`,
        name: columnNames[columnIndex],
        items: columnIndex === 0 ? items : [],
      }))
    )
  }

  const handleDragEnd = (result: { destination: any; source?: any }) => {
    if (!result.destination) {
      return
    }

    const {
      source: { index: sourceIndex, droppableId: sourceDroppableId },
      destination: {
        index: destinationIndex,
        droppableId: destinationDroppableId,
      },
    } = result

    const sourceColumnIndex = parseInt(
      sourceDroppableId.replace('column', ''),
      10
    )

    const destinationColumnIndex = parseInt(
      destinationDroppableId.replace('column', ''),
      10
    )

    const updatedColumns = [...columns]
    const [movedItem] = updatedColumns[sourceColumnIndex - 1].items.splice(
      sourceIndex,
      1
    )

    updatedColumns[destinationColumnIndex - 1].items.splice(
      destinationIndex,
      0,
      movedItem
    )

    setColumns(updatedColumns)
  }

  //DELETE button

  const deleteMutation = useMutation({
    mutationFn: delTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
      console.log('Task Deleted')
    },
  })

  const onDeleteTask = async (id) => {
    try {
      await deleteMutation.mutate(id)
      setColumns((prevColumns) =>
        prevColumns.map((column) => ({
          ...column,
          items: column.items.filter((item) => item.id !== id),
        }))
      )
      // localStorage.setItem('columns', JSON.stringify(columns));
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    } catch (error) {
      console.error(error)
    }
  }

  //ADD task form

  const handleAddTask = (newTask) => {
    console.log('newTask', newTask)
    setColumns((prevColumns) => {
      const updatedColumns = prevColumns.map((column) => {
        if (column.id === 'column1') {
          return {
            ...column,
            items: [...column.items, newTask],
          }
        }
        console.log(newTask)
        return column
      })

      // Log the updated state to verify correctness
      console.log('Updated Columns:', updatedColumns)

      return updatedColumns
    })

    // Optionally, you may want to update the queries or trigger a refetch
    queryClient.invalidateQueries({ queryKey: ['tasks'] })
  }

  console.log('items', items)

  return (
    <>
      <NewTaskForm onAddTask={handleAddTask} />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="dnd-list">
          {columns.map((column, columnIndex) => (
            <Droppable key={columnIndex} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="dnd-column"
                >
                  <h2>{`${column.name}`}</h2>
                  {column.items.map((item: any, index: number) => (
                    <Draggable
                      key={item.id}
                      draggableId={
                        item.id ? item.id.toString() : `unknownId-${index}`
                      }
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`dnd-item ${
                            snapshot.isDragging ? 'dragging' : ''
                          }`}
                        >
                          <p>{item.id}</p>
                          <h3>{item.title}</h3>
                          <p>{item.details}</p>
                          <p>
                            <b>{item.isStretch ? 'Stretch' : 'MVP'}</b>
                          </p>
                          {/* <p>{item.colour}</p> */}
                          <button onClick={() => onDeleteTask(item.id)}>
                            Delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </>
  )
}

//NEW Task form

// export function NewTaskForm() {
//   const queryClient = useQueryClient()

//   const [taskState, setTaskState] = useState({
//     title: '',
//     details: '',
//     isStretch: false,
//     colour: '',
//   })

//   //Add task mutation
//   const addTaskMutation = useMutation({
//     mutationFn: addTask,
//     onSuccess: () => {
//       console.log('New task added')
//       queryClient.invalidateQueries(['tasks'])
//     },
//   })

//   //Task form functions for induvidual fields

//   function handleTitleChange(e: any) {
//     const stateObj = {
//       ...taskState,
//       title: e.target.value,
//     }
//     setTaskState(stateObj)
//   }

//   function handleDetailsChange(e: any) {
//     const stateObj = {
//       ...taskState,
//       details: e.target.value,
//     }
//     setTaskState(stateObj)
//   }

//   // function handleisStretchChange(e: any) {
//   //   const stateObj = {
//   //     ...taskState,
//   //     isStretch: e.target.value,
//   //   }
//   //   setTaskState(stateObj)
//   // }

//   function handleColourChange(e: any) {
//     const stateObj = {
//       ...taskState,
//       colour: e.target.value,
//     }
//     setTaskState(stateObj)
//   }

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault()
//     console.log(event)

//     addTaskMutation.mutate(taskState)
//   }

//   return (
//     <form action="/" onSubmit={handleSubmit} method="post">
//       <label htmlFor="title">Title: </label>
//       <input
//         type="text"
//         id="title"
//         value={taskState.title}
//         onChange={handleTitleChange}
//       />
//       <label htmlFor="details">task: </label>
//       <input
//         type="text"
//         id="details"
//         value={taskState.details}
//         onChange={handleDetailsChange}
//       />
//       <label htmlFor="colour">colour: </label>
//       <input
//         type="text"
//         id="colour"
//         value={taskState.colour}
//         onChange={handleColourChange}
//       />
//       <button className="add"> Add</button>
//     </form>
//   )
// }
