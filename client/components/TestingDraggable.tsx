import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './DndList.css'
import { getTasks } from '../apis/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  ClassAttributes,
  HTMLAttributes,
  LegacyRef,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from 'react'
import { JSX } from 'react/jsx-runtime'

// const DndList = ({ items }) => {
//   const numberOfColumns = 4
//   const [currentColumns, setColumns] = useState([])

//   // const columns = [
//   //   { id: 'column1', title: 'Backlog', items: [items] },
//   //   { id: 'column2', title: 'Todo', items: [] },
//   //   { id: 'column3', title: 'In Progress', items: [] },
//   //   { id: 'column4', title: 'Completed', items: [] },
//   // ]

//   // Distribute items among columns
//   const columns = Array.from({ length: numberOfColumns }, (_, columnIndex) => ({
//     id: `column${columnIndex + 1}`,
//     items: columnIndex === 0 ? items : [],
//   }))

//   const handleDragEnd = (result) => {
//     if (!result.destination) {
//       return
//     }

//     const sourceIndex = result.source.index
//     const destinationIndex = result.destination.index
//     const sourceColumnIndex = parseInt(
//       result.source.droppableId.replace('column', ''),
//       10
//     )
//     const destinationColumnIndex = parseInt(
//       result.destination.droppableId.replace('column', ''),
//       10
//     )

//     // If the item is moved within the same column
//     if (sourceColumnIndex === destinationColumnIndex) {
//       const updatedItems = [...currentColumns[sourceColumnIndex - 1].items]
//       const [movedItem] = updatedItems.splice(sourceIndex, 1)
//       updatedItems.splice(destinationIndex, 0, movedItem)

//       const updatedColumn = {
//         ...currentColumns[sourceColumnIndex - 1],
//         items: updatedItems,
//       }

//       const updatedColumns = [...currentColumns]
//       updatedColumns[sourceColumnIndex - 1] = updatedColumn

//       console.log(updatedItems)
//       setColumns(updatedColumns)
//     } else {
//       // If the item is moved to a different column
//       const sourceItems = [...currentColumns[sourceColumnIndex - 1].items]
//       const destinationItems = [
//         ...currentColumns[destinationColumnIndex - 1].items,
//       ]
//       const [movedItem] = sourceItems.splice(sourceIndex, 1)
//       destinationItems.splice(destinationIndex, 0, movedItem)

//       const updatedSourceColumn = {
//         ...currentColumns[sourceColumnIndex - 1],
//         items: sourceItems,
//       }

//       const updatedDestinationColumn = {
//         ...currentColumns[destinationColumnIndex - 1],
//         items: destinationItems,
//       }

//       const updatedColumns = [...currentColumns]
//       updatedColumns[sourceColumnIndex - 1] = updatedSourceColumn
//       updatedColumns[destinationColumnIndex - 1] = updatedDestinationColumn

//       setColumns(updatedColumns)
//     }
//   }

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <div className="dnd-list">
//         {columns.map((column, columnIndex) => (
//           <Droppable key={column.id} droppableId={column.id}>
//             {(provided) => (
//               <div
//                 ref={provided.innerRef}
//                 {...provided.droppableProps}
//                 className="dnd-column"
//               >
//                 <h3>{`Column ${columnIndex + 1}`}</h3>
//                 {column.items.map(
//                   (
//                     item: {
//                       id: { toString: () => any }
//                       title: string
//                       details: string

//                       isStretch: any
//                       colour: string
//                     },
//                     index: any
//                   ) => (
//                     <Draggable
//                       key={item.id}
//                       draggableId={item.id.toString()}
//                       index={index}
//                     >
//                       {(
//                         provided: {
//                           innerRef: LegacyRef<HTMLDivElement> | undefined
//                           draggableProps: JSX.IntrinsicAttributes &
//                             ClassAttributes<HTMLDivElement> &
//                             HTMLAttributes<HTMLDivElement>
//                           dragHandleProps: JSX.IntrinsicAttributes &
//                             ClassAttributes<HTMLDivElement> &
//                             HTMLAttributes<HTMLDivElement>
//                         },
//                         snapshot: { isDragging: any }
//                       ) => (
//                         <div
//                           ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                           className={`dnd-item ${
//                             snapshot.isDragging ? 'dragging' : ''
//                           }`}
//                         >
//                           <p>{item.title}</p>
//                           <p>{item.details}</p>
//                           <p>{item.isStretch ? 'Stretch' : 'MVP'}</p>
//                           <p>{item.colour}</p>
//                         </div>
//                       )}
//                     </Draggable>
//                   )
//                 )}
//                 {provided.placeholder}
//               </div>
//             )}
//           </Droppable>
//         ))}
//       </div>
//     </DragDropContext>
//   )
// }

// export default DndList

const DndList = ({ items }) => {
  const numberOfColumns = 4

  // Load columns state from localStorage on initial render
  const initialColumns =
    JSON.parse(localStorage.getItem('columns')) || getDefaultColumns()

  const [columns, setColumns] = useState(initialColumns)

  useEffect(() => {
    // Save columns state to localStorage whenever it changes
    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns])

  function getDefaultColumns() {
    return Array.from({ length: numberOfColumns }, (_, columnIndex) => ({
      id: `column${columnIndex + 1}`,
      items: columnIndex === 0 ? items : [],
    }))
  }

  const handleDragEnd = (result) => {
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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="dnd-list">
        {columns.map((column, columnIndex) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="dnd-column"
              >
                <h3>{`Column ${columnIndex + 1}`}</h3>
                {column.items.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
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
                        <p>{item.title}</p>
                        <p>{item.details}</p>
                        <p>{item.isStretch ? 'Stretch' : 'MVP'}</p>
                        <p>{item.colour}</p>
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
  )
}

export default DndList
