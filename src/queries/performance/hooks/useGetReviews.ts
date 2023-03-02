import { CommentResponse } from '@types'
import { performanceAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { performanceKeys } from '@queries'

export const fetchReviews = async (performanceId: number) => {
  const { data }: AxiosResponse<CommentResponse> =
    await performanceAPI.getReviews(performanceId)
  return { data }
}

export const useGetReviews = (performanceId: number) => {
  return useQuery({
    queryKey: performanceKeys.reviews(performanceId),
    queryFn: () => fetchReviews(performanceId),
  })
}
