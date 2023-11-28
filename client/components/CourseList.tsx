import { getAllCoursesApi } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import DeleteCourse from './DeleteCourse'
import UpdateCourse from './UpdateCourse'
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
    return <p>Loading......</p>
  }

  if (isError) {
    return <p>Something has broken! Please refresh</p>
  }

  return (
    <>
      <div className="course-list">
        {courses.map((c) => (
          <div className="course" key={c.id}>
            <h2 className="course-name">{c.name}</h2>
            <p className="course-website">
              <b>Where:</b> {c.website}
            </p>
            <p className="course-host">
              <b>Hosted By:</b> {c.host}
            </p>
            <p className="course-field">
              <b>In:</b> {c.field}
            </p>
            <p className="course-cost">
              <b>Cost:</b> {c.field}
            </p>
            <a href={c.link} className="course-link">
              Visit Course
            </a>
            <DeleteCourse courseId={c.id} />
            <UpdateCourse courseId={c.id} />
          </div>
        ))}
      </div>
    </>
  )
}
