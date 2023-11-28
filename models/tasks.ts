export interface Task {
  id: number
  title: string
  details: string
  dateAdded: number
  isStretch: boolean
  colour: string
}

export interface NewTask {
  id: number
  title: string
  details: string
  isStretch: boolean
  colour: string
}
