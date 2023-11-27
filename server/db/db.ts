import db from './connection'
import { Courses } from '../../models/courses'

export async function getAllCourses(): Promise<Courses[]> {
  return db('courses').select()
}

export async function addCourseToDb(course: any) {
  return await db('courses').insert(course)
}

export async function deleteCourseFromDb(courseId: number) {
  console.log(courseId)
  return db('courses').where('id', courseId).delete()
}

export async function updateCourseInDb(
  courseId: number,
  updatedCourse: Courses
) {
  console.log(courseId)
  return db('courses').where('id', courseId).update(updatedCourse)
}
