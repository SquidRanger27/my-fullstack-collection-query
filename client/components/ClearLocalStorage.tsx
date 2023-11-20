import React from 'react'

const ClearLocalStorage: React.FC = () => {
  const handleClearLocalStorage = () => {
    localStorage.clear()
    console.log('Local storage cleared')
  }

  return (
    <div>
      <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
    </div>
  )
}

export default ClearLocalStorage
