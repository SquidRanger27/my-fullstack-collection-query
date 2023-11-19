import { useState } from 'react'
import React from 'react'
import { PacmanLoader } from 'react-spinners/PacmanLoader'
import * as Models from '../../models/cheese'
import Cheeses from './Cheeses'

function App() {
  return (
    <>
      <header className="header">
        <h1>Havarti Your Say</h1>
      </header>
      <Cheeses />
    </>
  )
}

export default App
