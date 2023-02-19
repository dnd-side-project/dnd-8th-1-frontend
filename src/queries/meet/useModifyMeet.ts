import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetEditRequest } from '@types'
import { useRouter } from 'next/router'

const patchMeet = async (payload: MeetEditRequest) => {
  const { data } = await eventAPI.update(payload)
  return data
}

const useModifyMeet = (eventId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation((payload: MeetEditRequest) => patchMeet(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries([
        QUERY_KEY.MEET,
        QUERY_KEY.MEET_DETAIL,
        eventId,
      ])
      router.push('/meet')
    },
  })
}

export default useModifyMeet
