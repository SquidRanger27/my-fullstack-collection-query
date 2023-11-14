import { getCharacters } from '../apis/characters'
import { useQuery } from '@tanstack/react-query'
import Character from './Character'

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
        <h1>Characters:</h1>
      </header>
      <section className="main">
        {characters.map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </section>
    </>
  )
}

export default App
