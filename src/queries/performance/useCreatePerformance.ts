import { performanceAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PerformanceEditRequest } from '@types'
import { useRouter } from 'next/router'

const createPerformance = async (payload: PerformanceEditRequest) => {
  const { data } = await performanceAPI.create(payload)
  return data
}

const useCreatePerformance = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation(
    (payload: PerformanceEditRequest) => createPerformance(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.PERFORMANCE.TOTAL_PERFORMANCE])
        router.push('/performance')
      },
    },
  )
}

export default useCreatePerformance
