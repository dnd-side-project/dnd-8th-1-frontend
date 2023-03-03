import { performanceAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PerformanceEditRequest } from '@types'
import { useRouter } from 'next/router'
import { performanceKeys } from '../performanceKeys'

export const createPerformance = async (payload: PerformanceEditRequest) => {
  const { data } = await performanceAPI.create(payload)
  return data
}

export const useCreatePerformance = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation(
    (payload: PerformanceEditRequest) => createPerformance(payload),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(performanceKeys.all)
        router.push(`/performance/${data.data.id}`)
      },
    },
  )
}

export default useCreatePerformance
