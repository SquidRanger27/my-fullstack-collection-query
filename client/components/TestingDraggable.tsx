import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './DndList.css'
import { getTasks } from '../apis/api'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState, useEffect, SetStateAction, Dispatch } from 'react'

// interface Column {
//   id: string
//   name: string
//   items: [] // Replace 'any' with the type of your items
// }

// const DndList: React.FC<{ items: any[] }> = ({ items }) => {
//   const numberOfColumns = 4
//   const [currentColumns, setColumns]: [
//     Column[],
//     Dispatch<SetStateAction<Column[]>>
//   ] = useState([])

//   useEffect(() => {
//     // Initialize columns when items change
//     const columns = Array.from(
//       { length: numberOfColumns },
//       (_, columnIndex) => ({
//         id: `column${columnIndex + 1}`,
//         name: `Column ${columnIndex + 1}`,
//         items: columnIndex === 0 ? items : [],
//       })
//     )

//     setColumns(columns)
//   }, [items])

//   const handleDragEnd = (result: any) => {
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

//     // Logging for debugging
//     console.log(
//       'Source and destination indices:',
//       sourceIndex,
//       destinationIndex
//     )
//     console.log(
//       'Source and destination columns:',
//       sourceColumnIndex,
//       destinationColumnIndex
//     )
//     console.log('Current columns:', currentColumns)

//     // Defensive check for undefined columns
//     const sourceColumn = currentColumns[sourceColumnIndex - 1]
//     const destinationColumn = currentColumns[destinationColumnIndex - 1]

//     if (!sourceColumn || !destinationColumn) {
//       console.error('Source or destination column is undefined.')
//       console.log('Columns after error:', currentColumns)
//       return
//     }

//     // ... (rest of the function remains the same)

//     // Remove the item from the source column
//     const updatedSourceItems = [...sourceColumn.items]
//     const [movedItem] = updatedSourceItems.splice(sourceIndex, 1)

//     // Insert the item into the destination column
//     const updatedDestinationItems = [...destinationColumn.items]
//     updatedDestinationItems.splice(destinationIndex, 0, movedItem)

//     // Update the state with the new columns
//     const updatedColumns = currentColumns.map((column, index) => {
//       if (index === sourceColumnIndex - 1) {
//         return { ...column, items: updatedSourceItems }
//       }
//       if (index === destinationColumnIndex - 1) {
//         return { ...column, items: updatedDestinationItems }
//       }
//       return column
//     })

//     setColumns(updatedColumns)
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
//                 {column.items.map((item, index) => (
//                   <Draggable
//                     key={item.id}
//                     draggableId={item.id.toString()}
//                     index={index}
//                   >
//                     {(provided, snapshot) => (
//                       <div
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                         className={`dnd-item ${
//                           snapshot.isDragging ? 'dragging' : ''
//                         }`}
//                       >
//                         <p>{item.title}</p>
//                         <p>{item.details}</p>
//                         <p>{item.isStretch ? 'Stretch' : 'MVP'}</p>
//                         <p>{item.colour}</p>
//                       </div>
//                     )}
//                   </Draggable>
//                 ))}
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
  const [currentColumns, setColumns] = useState([])

  // Distribute items among columns
  const columns = Array.from({ length: numberOfColumns }, (_, columnIndex) => ({
    id: `column${columnIndex + 1}`,
    items: columnIndex === 0 ? items : [],
  }))

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return
    }

    const sourceIndex = result.source.index
    const destinationIndex = result.destination.index
    const sourceColumnIndex = parseInt(
      result.source.droppableId.replace('column', ''),
      10
    )
    const destinationColumnIndex = parseInt(
      result.destination.droppableId.replace('column', ''),
      10
    )

    // If the item is moved within the same column
    if (sourceColumnIndex === destinationColumnIndex) {
      const updatedItems = [...currentColumns[sourceColumnIndex - 1].items]
      const [movedItem] = updatedItems.splice(sourceIndex, 1)
      updatedItems.splice(destinationIndex, 0, movedItem)

      const updatedColumn = {
        ...currentColumns[sourceColumnIndex - 1],
        items: updatedItems,
      }

      const updatedColumns = [...currentColumns]
      updatedColumns[sourceColumnIndex - 1] = updatedColumn

      setColumns(updatedColumns)
    } else {
      // If the item is moved to a different column
      const sourceItems = [...currentColumns[sourceColumnIndex - 1].items]
      const destinationItems = [
        ...currentColumns[destinationColumnIndex - 1].items,
      ]
      const [movedItem] = sourceItems.splice(sourceIndex, 1)
      destinationItems.splice(destinationIndex, 0, movedItem)

      const updatedSourceColumn = {
        ...currentColumns[sourceColumnIndex - 1],
        items: sourceItems,
      }

      const updatedDestinationColumn = {
        ...currentColumns[destinationColumnIndex - 1],
        items: destinationItems,
      }

      const updatedColumns = [...currentColumns]
      updatedColumns[sourceColumnIndex - 1] = updatedSourceColumn
      updatedColumns[destinationColumnIndex - 1] = updatedDestinationColumn

      setColumns(updatedColumns)
    }
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
                        <p>
                          {item.isStretch ? 'Stretch Task' : 'Regular Task'}
                        </p>
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
