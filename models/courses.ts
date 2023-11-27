export interface Courses {
  id: number
  name: string
  website: string
  host: string
  field: string
  cost: number
  link: string
  complete: boolean
}

export interface NewCourse {
  name: string
  website: string
  host: string
  field: string
  cost: number
  link: string
  complete: boolean
}
