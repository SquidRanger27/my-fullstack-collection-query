import { getCharacters } from '../apis/characters'
import Character from './Character'
import AddCharacter from './AddCharacter'
import { useQuery } from '@tanstack/react-query'

function Characters() {
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
        <AddCharacter />
      </section>
    </>
  )
}

export default Characters
