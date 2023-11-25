import { useQuery } from '@tanstack/react-query'
import { testConnection } from '../apis/characters'

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
    queryFn: testConnection,
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
