import request from 'superagent'
import { Courses, NewCourse } from '../../models/courses'

const rootUrl = 'api/v1/'

export async function getAllCoursesApi(): Promise<Courses[]> {
  const courseResponse = await request.get(rootUrl + 'courses')
  // console.log(courseResponse)
  return courseResponse.body
}

export async function addCoursesApi(course: NewCourse) {
  try {
    const response = await request.post(rootUrl + 'courses').send(course)
    console.log('Response Data:', response.body)
    return response.body
  } catch (error) {
    console.error('Error in addCoursesApi:', error)
    throw error
  }
}

export async function deleteCoursesApi(courseId: number) {
  const response = await request.delete(rootUrl + `courses/${courseId}`)
  console.log(response.body)

  return response.body
}

export async function updateCoursesApi(
  courseId: number,
  updatedCourse: Courses
) {
  const response = await request
    .patch(rootUrl + `courses/${courseId}`)
    .send(updatedCourse)
  console.log(response.body)
  return response.body
}
