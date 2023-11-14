import { getCharacters } from '../apis/characters'
import { useQuery } from '@tanstack/react-query'

function App() {
  const {
    data: characters,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
  })

  if (error) return <p>{error}</p>

  if (!characters || isLoading) return <p>Loading ...</p>

  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <pre>{JSON.stringify(characters, null, 2)}</pre>
      </section>
    </>
  )
}

export default App
