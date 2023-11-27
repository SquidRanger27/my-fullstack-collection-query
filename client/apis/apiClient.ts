import request from 'superagent'
import { Courses } from '../../models/courses'

const rootUrl = 'api/v1/'

export async function getAllCoursesApi(): Promise<Courses[]> {
  const courseResponse = await request.get(rootUrl + 'courses')
  console.log(courseResponse)
  return courseResponse.body
}
