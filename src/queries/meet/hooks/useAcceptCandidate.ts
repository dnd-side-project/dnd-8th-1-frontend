import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetAcceptRequest } from '@types'
import { meetKeys } from '@queries'

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
        queryClient.invalidateQueries(meetKeys.candidate)
      },
    },
  )
}

export default useAcceptCandidate
