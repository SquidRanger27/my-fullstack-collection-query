import { getAllVerses } from '../apis/verses'
import { useQuery } from '@tanstack/react-query'
import Verses from './Verses'
function App() {
  const {
    data: verses,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['verses'],
    queryFn: getAllVerses,
  })
  if (isError) return <p>Error!</p>
  if (!verses || isLoading) return <p>Loading ...</p>

  return (
    <>
      <header>
        <div className="header">
          <h1>
            <em>Essential Verses</em>
          </h1>
        </div>
      </header>
      <section className="main">
        {verses.map((verses) => (
          <Verses key={verses.id} {...verses} />
        ))}
      </section>
    </>
  )
}
export default App
