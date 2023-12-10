import React from 'react'
import CollectionViewer from './CollectionViewer'

const App: React.FC = () => {
  return (
    <>
      <header className="header">
        <h1>My PC Game Collection:</h1>
      </header>
      <section className="main">
        <CollectionViewer />
      </section>
    </>
  )
}

export default App
