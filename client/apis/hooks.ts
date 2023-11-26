import * as nz from './apiClient'
import { useMutation, useQuery } from '@tanstack/react-query'

type UseGetPlaceByIdProps = {
  id: number
}

export const useGetAllPlaces = () => {
  return useQuery({ queryKey: ['places'], queryFn: nz.getAllPlaces })
}

export const useGetPlaceById = ({ id }: UseGetPlaceByIdProps) => {
  return useQuery({
    queryKey: ['placeById', id],
    queryFn: () => nz.getPlaceById(id),
  })
}
