import { useQuery } from '@tanstack/react-query'
import { MainCommentResponse } from '@types'
import { mainAPI } from 'apis/domains/main'
import { AxiosResponse } from 'axios'
import { mainKeys } from '../mainKeys'

export const getComment = async () => {
  const { data }: AxiosResponse<MainCommentResponse> =
    await mainAPI.getComment()
  return data
}

export const useComment = () => {
  return useQuery(mainKeys.comment, getComment)
}
