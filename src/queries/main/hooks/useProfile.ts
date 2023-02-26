import { useQuery } from '@tanstack/react-query'
import { MainProfileResponse } from '@types'
import { mainAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { mainKeys } from '../mainKeys'

export const getProfile = async () => {
  const { data }: AxiosResponse<MainProfileResponse> =
    await mainAPI.getRandomProfile()
  return data
}

export const useProfile = () => {
  return useQuery(mainKeys.profile, getProfile)
}
