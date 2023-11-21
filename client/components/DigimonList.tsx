// import { useEffect, useState } from 'react'
import { getDigimonApi } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import { DigimonData } from '../../models/digimon'
import DigimonEditing from './DigimonEditing'

export default function DigimonList() {
  const {
    data: digimons,
    error,
    isLoading,
  } = useQuery({ queryKey: ['digimons'], queryFn: getDigimonApi })

  if (!digimons || isLoading) {
    return <p>Loading Digimons...</p>
  }
  if (error) {
    return <p>Error!</p>
  }

  return (
    <>
      <div>
        <h3>Hello, Digimon!</h3>
        <ol className="digimonList">
          {digimons.map((digimon: DigimonData) => (
            <li key={digimon.id}>
              <strong>Digimon ID:</strong> {digimon.id} <br />
              <strong>Digimon Name:</strong> {digimon.digimonName} <br />
              <strong>Digimon Type:</strong> {digimon.digimonType}
              <br />
              <DigimonEditing
                id={digimon.id}
                digimonName={digimon.digimonName}
                digimonType={digimon.digimonType}
              />
              <br />
              <br />
            </li>
          ))}
        </ol>
      </div>
    </>
  )
}
