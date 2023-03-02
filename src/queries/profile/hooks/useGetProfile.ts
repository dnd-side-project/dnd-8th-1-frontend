import { profileAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { ProfileResponse } from '@types'
import { AxiosResponse } from 'axios'
import { profileKeys } from '@queries'

export const getProfile = async (memberId: number) => {
  const { data }: AxiosResponse<ProfileResponse> =
    await profileAPI.getAllProfile(memberId)
  return data
}

export const useGetProfile = (memberId: number) => {
  return useQuery([...profileKeys.all, memberId], () => getProfile(memberId))
}
