import request from 'superagent'
import type { Task } from '../../models/tasks'
const rootUrl = '/api/v1'

export async function getTasks(): Promise<Task> {
  const res = await request.get(rootUrl + '/kanban')
  return res.body
}

// export async function editTask(task: any) {
//   const res = await request
//     .patch(rootUrl + '/tasks')
//     .send({ content: task.content, id: task.id })

//   return res.body
// }
export async function addTask(task: any): Promise<string> {
  const res = await request
    .post(rootUrl + '/newtask')
    .send({ content: task.task, title: task.title })

  return res.body
}
