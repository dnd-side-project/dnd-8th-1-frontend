import { performanceAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { PerformanceEditRequest } from '@types'
import { useRouter } from 'next/router'
import { performanceKeys } from '@queries'

export const patchPerformance = async (
  payload: PerformanceEditRequest & { id: number },
) => {
  const { data } = await performanceAPI.edit(payload)
  return data
}

export const useModifyPerformance = (performanceId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation(
    (payload: PerformanceEditRequest & { id: number }) =>
      patchPerformance(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(performanceKeys.detail(performanceId))
        router.push(`/performance/${performanceId}`)
      },
    },
  )
}
