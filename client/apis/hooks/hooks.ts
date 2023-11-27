import * as nz from '../apiClient'
import { useMutation, useQuery } from '@tanstack/react-query'
import { UseGetPlaceByIdProps } from '../../../models/models'

export const useGetAllPlaces = () => {
  return useQuery({ queryKey: ['places'], queryFn: nz.getAllPlaces })
}

export const useGetDestination = (id: number) => {
  return useQuery({
    queryKey: ['destination', id],
    queryFn: () => nz.getDestinationForPlaces(id),
  })
}
