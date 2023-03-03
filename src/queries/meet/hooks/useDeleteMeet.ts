import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { meetKeys } from '@queries'
import { getAccessToken } from '@utils'

const deleteMeet = async (eventId: number) => {
  const { data } = await eventAPI.delete(eventId)
  return data
}
const useDeleteMeet = (eventId: number) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const accessToken = getAccessToken()

  return useMutation((eventId: number) => deleteMeet(eventId), {
    onSuccess: () => {
      queryClient.invalidateQueries(
        meetKeys.detail(eventId, accessToken ? accessToken : ''),
      )
      router.push('/meet')
    },
  })
}

export default useDeleteMeet
