import { PerformanceDetailResponse } from '@types'
import { performanceAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { performanceKeys } from '../performanceKeys'
import { AxiosResponse } from 'axios'

export const fetchPerformanceDetail = async (performanceId: number) => {
  const { data }: AxiosResponse<PerformanceDetailResponse> =
    await performanceAPI.getDetail(performanceId)
  return data
}

export const useDetailPerformance = (performanceId: number) => {
  return useQuery({
    queryKey: performanceKeys.detail(performanceId),
    queryFn: () => fetchPerformanceDetail(performanceId),
  })
}
