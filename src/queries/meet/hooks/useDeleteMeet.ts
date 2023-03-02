import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { meetKeys } from '@queries'

const deleteMeet = async (eventId: number) => {
  const { data } = await eventAPI.delete(eventId)
  return data
}
const useDeleteMeet = (eventId: number) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation((eventId: number) => deleteMeet(eventId), {
    onSuccess: () => {
      queryClient.invalidateQueries(meetKeys.detail(eventId))
      router.push('/meet')
    },
  })
}

export default useDeleteMeet
