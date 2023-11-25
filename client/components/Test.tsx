import { useQuery } from '@tanstack/react-query'
import { getCharacters, testConnection } from '../apis/characters'

function Test() {
  const {
    data,
    error,
    isLoading,
  }: {
    data: unknown | undefined
    error: unknown
    isLoading: boolean
  } = useQuery({
    queryKey: ['test'],
    queryFn: getCharacters,
  })

  if (error) return <p>An error has occured :(</p>

  if (!data || isLoading) return <p>Testing Connection...</p>

  return (
    <>
      <p>Connection Tested</p>
      <code>{JSON.stringify(data)}</code>
    </>
  )
}

export default Test
