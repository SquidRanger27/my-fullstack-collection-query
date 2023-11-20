// import { Outlet } from 'react-router-dom'

import ItemsList from './ItemsList'

function App() {
  return (
    <>
      <header className="header">
        <h1>Where Is My Item?</h1>
        {/* <li>Home</li>
        <li>Profiles/Members</li>
        <li>Items Lent</li>
        <li>Memories Captured</li>
        <h1>Log In</h1> */}
      </header>

      <section className="main">
        {/* add your code here */}
        <ItemsList />
      </section>
    </>
  )
}

export default App
