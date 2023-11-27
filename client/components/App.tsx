import AddCourse from './AddCourses'
import CourseList from './CourseList'

function App() {
  return (
    <>
      <header className="header">
        <h1>Courses I want to Complete!</h1>
      </header>
      <section className="main">
        <div className="main-left">
          <CourseList />
        </div>
        <div className="main-right">
          <AddCourse />
        </div>
      </section>
    </>
  )
}

export default App
