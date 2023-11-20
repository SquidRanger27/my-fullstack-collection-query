import connection from './connection.ts'
import { Task } from '../../models/tasks.ts'

export async function getAllTasks(): Promise<Task[]> {
  return connection('task').select()
}

// export async function editTask(id: number, content: string) {
//   await connection('task')
//     .update('taskContent', content)
//     .update('isEdited', 1)
//     .where('id', id)
//   return connection('task').select('*').where('id', id)
// }
export async function insertTask(
  title: string,
  details: string,
  isStretch: boolean,
  colour: string
) {
  const currentDate = new Date()
  await connection('task').insert([
    { title, details, dateAdded: currentDate, isStretch, colour },
  ])
  return connection('task').select('*')
}


export async function deleteTask(taskId: number): Promise<void> {
  await connection('task').where('id', taskId).del();
}
