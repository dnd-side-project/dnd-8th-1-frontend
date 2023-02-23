import { useRouter } from 'next/router'
import { performanceAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const deletePerformance = async (performanceId: number) => {
  const { data } = await performanceAPI.delete(performanceId)
  return data
}

const useCancelCandidate = (performanceId: number) => {
  const router = useRouter()

  const queryClient = useQueryClient()
  return useMutation(
    (performanceId: number) => deletePerformance(performanceId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          QUERY_KEY.PERFORMANCE.DETAIL,
          performanceId,
        ])
        router.push('/performance')
      },
    },
  )
}

export default useCancelCandidate
