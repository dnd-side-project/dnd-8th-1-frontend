import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetCloseRequest } from '@types'
import { useRouter } from 'next/router'

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
        queryClient.invalidateQueries([QUERY_KEY.MEET.DETAIL, meetId])
        router.push(`/meet/${meetId}`)
      },
    },
  )
}

export default useMeetDeadline
