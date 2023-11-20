import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './DndList.css'
import { useState, useEffect } from 'react'

//TODO new items will not render unless local sotrage is cleared

const DndList = ({ items }) => {
  const numberOfColumns = 4

  // Load columns state from localStorage on initial render
  const initialColumns =
    JSON.parse(localStorage.getItem('columns')) || getDefaultColumns()
  console.log(localStorage)

  const [columns, setColumns] = useState(initialColumns)

  useEffect(() => {
    // Save columns state to localStorage whenever it changes

    localStorage.setItem('columns', JSON.stringify(columns))
  }, [columns])

  function getDefaultColumns() {
    const columnNames = ['Backlog', 'ToDos', 'In progress', 'Completed']
    console.log(columnNames)

    return Array.from({ length: numberOfColumns }, (_, columnIndex) => ({
      id: `column${columnIndex + 1}`,
      name: columnNames[columnIndex],
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
                <h3>{`${column.name}`}</h3>
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
