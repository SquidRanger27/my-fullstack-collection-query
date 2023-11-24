import { getCharacters } from '../apis/characters'
import Character from './Character'
import AddCharacter from './AddCharacter'
import { useQuery } from '@tanstack/react-query'
import { CharacterModel } from '../../models/Character'

function Characters() {
  const {
    data: characters,
    error,
    isLoading,
  }: {
    data: CharacterModel[] | undefined
    error: unknown
    isLoading: boolean
  } = useQuery({
    queryKey: ['characters'],
    queryFn: getCharacters,
  })

  if (error) return <p>An error has occured :(</p>

  if (!characters || isLoading) return <p>Loading ...</p>

  return (
    <>
      <header className="header">
        <h1>Characters:</h1>
      </header>
      <section className="main">
        {characters.map((character: CharacterModel) => (
          <Character key={character.id} {...character} />
        ))}
        <AddCharacter />
      </section>
    </>
  )
}

export default Characters
