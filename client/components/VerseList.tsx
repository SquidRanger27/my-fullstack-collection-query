import { useQuery } from '@tanstack/react-query'
import { getAllVerses } from '../apis/verses'
import { Link } from 'react-router-dom'
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { deleteVerse } from '../apis/verses'
export default function VerseList() {
  //create useQuery to display the list of verse
  const {
    data: verseList,
    isLoading,
    isError,
  } = useQuery({ queryKey: ['verse'], queryFn: getAllVerses })

  //delete using useMutation
  const queryClient = useQueryClient()
  const deletionMutation = useMutation({
    mutationFn: deleteVerse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['verse'] })
    },
  })

  const handleDeleteClick = (id: number) => {
    deletionMutation.mutate({id})
    console.log('deleting', id)
  }

  if (!verseList || isLoading) {
    return <p>Hold on, still loading...</p>
  }

  if (isError) {
    return <p>Ooops! It is Broekn!</p>
  }
  console.log('This is the verselist')
  console.log(verseList)
  return (
    <>
      <div>
        <h2>Bible Verses to look back to:</h2>
        <div className="verseDiv">
          {verseList.map((verse) => (
            <>
              <div className="singleVerseDiv">
                <Link to={`/verses/${verse.id}`} key={verse.id}>
                  {verse.verse}
                </Link>
                <button
                  onClick={() => {
                    handleDeleteClick(verse.id)
                  }}
                  type="button"
                >
                  Delete
                </button>
              </div>
              <br />
            </>
          ))}
        </div>
      </div>
    </>
  )
}
