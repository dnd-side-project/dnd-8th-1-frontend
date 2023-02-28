import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetEditRequest } from '@types'
import { useRouter } from 'next/router'
import { meetKeys } from '@queries'

const patchMeet = async (payload: MeetEditRequest) => {
  const { data } = await eventAPI.update(payload)
  return data
}

const useModifyMeet = (eventId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation((payload: MeetEditRequest) => patchMeet(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries(meetKeys.detail(eventId))
      router.push('/meet')
    },
  })
}

export default useModifyMeet
