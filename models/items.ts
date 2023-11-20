export interface Item {
  id: number
  name: string
  item: string
  description: string
  dateLent: number
  dateAdded: number
}

export interface NewItem {
  name: string
  item: string
  description: string
  dateLent: number
}
