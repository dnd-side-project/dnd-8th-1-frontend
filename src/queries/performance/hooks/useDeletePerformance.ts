import { performanceAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { performanceKeys } from '../performanceKeys'

const deletePerformance = async (performanceId: number) => {
  const { data } = await performanceAPI.delete(performanceId)
  return data
}

const useDeletePerformance = (performanceId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation(() => deletePerformance(performanceId), {
    onSuccess: () => {
      queryClient.invalidateQueries(performanceKeys.all)
      router.push('/performance')
    },
  })
}

export default useDeletePerformance
