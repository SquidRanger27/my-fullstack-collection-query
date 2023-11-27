import { Outlet, useNavigate } from 'react-router-dom'

function AppLayout() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }
  const handleKeyDown = () => {
    navigate('/')
  }

  return (
    <>
      <header className="header">
        <div
          className="banner-container"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
        >
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
