import AddCourse from './AddCourses'
import CourseList from './CourseList'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <CourseList />
        <AddCourse />
      </section>
    </>
  )
}

export default App
