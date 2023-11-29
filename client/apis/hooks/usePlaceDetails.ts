//this file is not being used
import { useState, useEffect } from 'react'
import { getPlaceById, getDestinationForPlaces } from '../apiClient'

export function usePlaceDetails(id: number) {
  const [cityDetails, setCityDetails] = useState(null)
  const [destination, setDestination] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const placeDetails = await getPlaceById(id)
        const destinationDetails = await getDestinationForPlaces(id)

        setCityDetails(placeDetails)
        setDestination(destinationDetails)
        setLoading(false)
      } catch (error) {
        setError(error.message || 'Error loading data')
        setLoading(false)
      }
    }
    fetchData()
  }, [id])

  return { cityDetails, destination, loading, error }
}
