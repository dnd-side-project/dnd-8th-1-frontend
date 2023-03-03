import { performanceAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { performanceKeys } from '../performanceKeys'

export const deleteReview = async (reviewId: number) => {
  const { data } = await performanceAPI.deleteReview(reviewId)
  return data
}

export const useDeleteReview = (performanceId: number) => {
  const queryClient = useQueryClient()
  return useMutation((reviewId: number) => deleteReview(reviewId), {
    onSuccess: () => {
      queryClient.invalidateQueries(performanceKeys.detail(performanceId))
    },
  })
}
