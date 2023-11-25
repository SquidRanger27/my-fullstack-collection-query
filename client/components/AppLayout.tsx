import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
      <header className="header">
        <div className="banner-container">
          <h1 id="home-page-title">
            Explore Major Cities <br></br> in New Zealand
          </h1>
        </div>
      </header>
      <section className="main">
        <Outlet />
      </section>
    </>
  )
}

export default AppLayout
