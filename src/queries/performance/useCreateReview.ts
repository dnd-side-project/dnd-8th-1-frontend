import { performanceAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CommentCreate } from '@types'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'

const postReviewCreate = async (reviewId: number, payload: CommentCreate) => {
  const { data }: AxiosResponse<CommentCreate> =
    await performanceAPI.createReview(reviewId, payload)
  return data
}

const useCreateMeet = (reviewId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation(
    (payload: CommentCreate) => postReviewCreate(reviewId, payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.PERFORMANCE.DETAIL])
        router.push(`/performance/${reviewId}`)
      },
    },
  )
}

export default useCreateMeet
