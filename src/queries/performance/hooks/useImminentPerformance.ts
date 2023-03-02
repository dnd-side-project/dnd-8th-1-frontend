import { performanceAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { PerformanceImminentResponse } from '@types'
import { AxiosResponse } from 'axios'
import { performanceKeys } from '@queries'

export const getImminentPerformances = async () => {
  const { data }: AxiosResponse<PerformanceImminentResponse> =
    await performanceAPI.getImminent()
  return data
}

export const useImminentPerformance = () => {
  return useQuery(performanceKeys.imminentPerformance, getImminentPerformances)
}
