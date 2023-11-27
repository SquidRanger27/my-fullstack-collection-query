import { deleteCoursesApi } from '../apis/apiClient'
import { useQueryClient, useMutation } from '@tanstack/react-query'

interface Props {
  courseId: number
}

export default function DeleteCourse({ courseId }: Props) {
  const queryClient = useQueryClient()
  const deleteCourseMutation = useMutation({
    mutationFn: () => deleteCoursesApi(courseId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['courses'] })
    },
  })

  const handleDelete = () => {
    deleteCourseMutation.mutate()
  }

  return (
    <div>
      <button onClick={handleDelete} disabled={deleteCourseMutation.isLoading}>
        {deleteCourseMutation.isLoading
          ? 'Deleting Now!'
          : 'Delete This Course!'}
      </button>
    </div>
  )
}
