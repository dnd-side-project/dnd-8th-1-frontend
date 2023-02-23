import { performanceAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useQuery } from '@tanstack/react-query'
import { PerformanceImminentResponse } from '@types'
import { AxiosResponse } from 'axios'

const getImminentPerformances = async () => {
  const { data }: AxiosResponse<PerformanceImminentResponse> =
    await performanceAPI.imminent()
  return data
}

const useImminentPerformance = () => {
  return useQuery([QUERY_KEY.PERFORMANCE_IMMINENT], getImminentPerformances)
}

export default useImminentPerformance
