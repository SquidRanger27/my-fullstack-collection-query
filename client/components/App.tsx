// import React from 'react'
import Comics from './Comics'
import ComicsList from './ComicsList'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Comics />
        {/* <ComicsList /> */}
      </section>
    </>
  )
}

export default App
