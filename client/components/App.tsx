import { getAllVerses } from '../apis/verses'
import { isError, useQuery } from '@tanstack/react-query'
import { Outlet } from 'react-router-dom'
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
      <header className="header">
        <h1>
          <em>Essential Verses</em>
        </h1>
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
