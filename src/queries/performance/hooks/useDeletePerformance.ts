import { performanceAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { performanceKeys } from '@queries'

const deletePerformance = async (performanceId: number) => {
  const { data } = await performanceAPI.delete(performanceId)
  return data
}

const useDeletePerformance = () => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(
    (performanceId: number) => deletePerformance(performanceId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(performanceKeys.all)
        router.push('/performance')
      },
    },
  )
}

export default useDeletePerformance
