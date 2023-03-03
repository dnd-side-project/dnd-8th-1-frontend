import { performanceAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentCreate } from '@types'
import { AxiosResponse } from 'axios'
import { performanceKeys } from '@queries'

const postReviewCreate = async (
  performanceId: number,
  payload: CommentCreate,
) => {
  const { data }: AxiosResponse<CommentCreate> =
    await performanceAPI.createReview(performanceId, payload)
  return data
}

const useCreateReview = (performanceId: number) => {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: CommentCreate) => postReviewCreate(performanceId, payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(performanceKeys.detail(performanceId))
      },
    },
  )
}

export default useCreateReview
