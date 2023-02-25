import { useQuery } from '@tanstack/react-query'
import { MainCommentResponse } from '@types'
import { mainAPI } from 'apis/domains/main'
import { AxiosResponse } from 'axios'
import { mainKeys } from '../mainKeys'

export const getLatestReviews = async () => {
  const { data }: AxiosResponse<MainCommentResponse> =
    await mainAPI.getLatestReviews()
  return data
}

export const useLatestReviews = () => {
  return useQuery(mainKeys.comment, getLatestReviews)
}
