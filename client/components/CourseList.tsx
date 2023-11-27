import { getAllCoursesApi } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import DeleteCourse from './DeleteCourse'
export default function CourseList() {
  const {
    data: courses,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['courses'],
    queryFn: getAllCoursesApi,
  })

  if (!courses || isLoading) {
    return <p>Shit is Loading my brother</p>
  }

  if (isError) {
    return <p>Shit broken biatch!!</p>
  }

  return (
    <>
      <div className="course-list">
        {courses.map((c) => (
          <div className="course" key={c.id}>
            <h2 className="course-name">{c.name}</h2>
            <p className="course-website">{c.website}</p>
            <p className="course-host">{c.host}</p>
            <p className="course-field">{c.field}</p>
            <p className="course-cost">{c.field}</p>
            <a href={c.link} className="course-link">
              Visit Course
            </a>
            <DeleteCourse courseId={c.id} />
          </div>
        ))}
      </div>
    </>
  )
}
