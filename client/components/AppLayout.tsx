import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <header className="header">
        <h1>My Collection</h1>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </>
  )
}

export default AppLayout
