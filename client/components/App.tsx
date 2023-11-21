import AddDigimonForm from './AddDigimon'
import Digimon from './DigimonList'

function App() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Digimon />
        <AddDigimonForm />
      </section>
    </>
  )
}

export default App
