import request from 'superagent'
import { Courses, NewCourse } from '../../models/courses'

const rootUrl = 'api/v1/'

export async function getAllCoursesApi(): Promise<Courses[]> {
  const courseResponse = await request.get(rootUrl + 'courses')
  // console.log(courseResponse)
  return courseResponse.body
}

export async function addCoursesApi(course: NewCourse) {
  // const response = await request.post(rootUrl + 'courses').send(course)
  // console.log(response.body)
  // return response.body

  try {
    const response = await request.post(rootUrl + 'courses').send(course)
    console.log('Response Data:', response.body)
    return response.body
  } catch (error) {
    console.error('Error in addCoursesApi:', error)
    throw error
  }
}
