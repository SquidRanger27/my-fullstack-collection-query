import * as nz from '../apiClient'
import { useQuery } from '@tanstack/react-query'

export const useGetAllPlaces = () => {
  return useQuery({ queryKey: ['places'], queryFn: nz.getAllPlaces })
}

export const useGetDestination = (id: number) => {
  return useQuery({
    queryKey: ['destination', id],
    queryFn: () => nz.getDestinationForPlaces(id),
  })
}
