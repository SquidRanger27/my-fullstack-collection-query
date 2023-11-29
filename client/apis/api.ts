import request from 'superagent'
import { Book, BookData } from '../models/quiz'

const rootUrl = '/api/v1'

export async function getBooksApi() {
  try {
    const response = await request.get(rootUrl + '/books')
    return response.body as BookData[]
  } catch (err) {
    console.log(err as Error)
  }
}

export async function getBookByIdApi(id: number) {
  try {
    const response = await request.get(rootUrl + '/books/' + id)
    return response.body as BookData[]
  } catch (err) {
    console.log(err as Error)
  }
}

export async function addBookApi(book: Book[]) {
  try{
  const response = await request.post(`${rootUrl}/books/add`).send(book)
  return response.body
  } catch (err) {
    console.log(err as Error)
  }
}

export async function deleteBookApi(id: number){
  try{
    console.log(id)
  const response = await request.delete(`${rootUrl}/books/${id}/delete`)
  console.log(response)
  return response.body
  } catch (err){
    console.log(err as Error)
  }

}
