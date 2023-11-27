import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default App
