import db from './connection'
import { Courses } from '../../models/courses'

export async function getAllCourses(): Promise<Courses[]> {
  return db('courses').select(
    'id',
    'name',
    'website_name as websiteName',
    'host',
    'field',
    'cost',
    'link',
    'complete'
  )
}
