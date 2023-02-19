import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'

const deleteMeet = async (eventId: number) => {
  const { data } = await eventAPI.delete(eventId)
  return data
}
const useDeleteMeet = () => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation((eventId: number) => deleteMeet(eventId), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MEET])
      router.push('/meet')
    },
  })
}

export default useDeleteMeet
