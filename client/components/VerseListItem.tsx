import * as Api from '../apis/verses.ts'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Verse } from '../../models/verse.ts'


interface VerseItem {
  id: Verse['id']
  verse: string
}

export default function VerseListItem({ id, verse }: VerseItem) {
  console.log('Rendering VerseListItem:', id)
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: Api.deleteVerse,
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['verse'] })
    },
  })

  // TODO: submit the form to delete the verse
  const handleDeleteClick = () => {
    console.log('Delete button clicked for id:', id)
    deleteMutation.mutate({ id })
  }

  return (
    <div>
      <p>
        {id} - {verse} -{' '}
        <span>
          <button type="button" onClick={handleDeleteClick}>
            Delete
          </button>
        </span>
      </p>
    </div>
  )
}
