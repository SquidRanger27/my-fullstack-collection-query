import Tasks from './Kanban'
import { DragDropContext, Draggable } from 'react-beautiful-dnd'
import { Droppable } from 'react-beautiful-dnd'
import DndList from './TestingDraggable'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Kanban 4 U</h1>

        <Tasks />
      </header>
      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
