// import { useEffect, useState } from 'react'
import { getDigimonApi } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'
import DigimonData from '../../models/digimon'

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
        <p>Hello, Digimon!</p>
        <ul>
          {digimons.map((digimon: DigimonData) => (
            <li key={digimon.id}>{digimon.digimon_name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
