import * as nz from './apiClient'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useGetAllPlaces = () => {
  return useQuery({ queryKey: ['places'], queryFn: nz.getAllPlaces })
}
