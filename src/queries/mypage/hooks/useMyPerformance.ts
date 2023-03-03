import { myPageAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { myPageKeys } from '@queries'
import { MyPerformanceResponse } from '@types'

export const getMyPerformance = async () => {
  try {
    const { data }: AxiosResponse<MyPerformanceResponse> =
      await myPageAPI.getPerformances()
    return data
  } catch (e) {
    return { data: [] }
  }
}

const useMyPerformances = (userId: number) => {
  return useQuery(myPageKeys.performances(userId), () => getMyPerformance())
}

export default useMyPerformances
