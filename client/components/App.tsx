import Tasks from './Kanban'
import { NewTaskForm } from './NewTaskForm'
import ClearLocalStorage from './ClearLocalStorage'

function App() {
  return (
    <>
      <header className="header">
        <h1>Kanban 4 U</h1>
        {/* <ClearLocalStorage /> */}
        <NewTaskForm />

        <Tasks />
      </header>

      <section className="main">{/* add your code here */}</section>
    </>
  )
}

export default App
