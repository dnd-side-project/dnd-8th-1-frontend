import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetApplyRequest } from '@types'

const postRequestCandidate = async (payload: MeetApplyRequest) => {
  const { data } = await eventAPI.apply(payload)
  return data
}

const useRequestCandidate = (eventId: number) => {
  const queryClient = useQueryClient()
  return useMutation(
    (payload: MeetApplyRequest) => postRequestCandidate(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.MEET_CANDIDATE_VIEW, eventId])
      },
    },
  )
}

export default useRequestCandidate
