import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetCloseRequest } from '@types'
import { useRouter } from 'next/router'
import { meetKeys } from '@queries'

const patchEarlyDeadline = async (payload: MeetCloseRequest) => {
  const { data } = await eventAPI.close(payload)
  return data
}

const useMeetDeadline = (meetId: number) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation(
    (payload: MeetCloseRequest) => patchEarlyDeadline(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(meetKeys.detail(meetId))
        router.push(`/meet/${meetId}`)
      },
    },
  )
}

export default useMeetDeadline
