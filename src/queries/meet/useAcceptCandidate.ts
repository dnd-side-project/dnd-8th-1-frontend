import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetAcceptRequest } from '@types'

const patchAcceptCandidate = async (
  eventId: number,
  payload: MeetAcceptRequest,
) => {
  const { data } = await eventAPI.accept(eventId, payload)
  return data
}

const useAcceptCandidate = () => {
  const queryClient = useQueryClient()
  return useMutation(
    (payload: MeetAcceptRequest & { eventId: number }) =>
      patchAcceptCandidate(payload.eventId, payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.MEET.CANDIDATE])
      },
    },
  )
}

export default useAcceptCandidate
