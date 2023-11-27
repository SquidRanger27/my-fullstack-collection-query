import db from './connection'
import { Courses } from '../../models/courses'

export async function getAllCourses(): Promise<Courses[]> {
  return db('courses').select()
}

export async function addCourseToDb(course: any) {
  return await db('courses').insert(course)
}
