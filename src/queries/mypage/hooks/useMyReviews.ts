import { myPageAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { myPageKeys } from '@queries'
import { MyReviewResponse } from '@types'

export const getMyReviews = async () => {
  const { data }: AxiosResponse<MyReviewResponse> = await myPageAPI.getReview()
  return data
}

const useMyReviews = (userId: number) => {
  return useQuery(myPageKeys.reviews(userId), () => getMyReviews())
}

export default useMyReviews
