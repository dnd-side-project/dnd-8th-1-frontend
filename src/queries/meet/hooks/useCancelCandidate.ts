import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'

const deleteCandidate = async (eventId: number) => {
  const { data } = await eventAPI.cancel(eventId)
  return data
}

const useCancelCandidate = (
  eventId: number,
  setIsCompleted: Dispatch<SetStateAction<boolean>>,
) => {
  const queryClient = useQueryClient()
  return useMutation((eventId: number) => deleteCandidate(eventId), {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MEET.CANDIDATE, eventId])
      setIsCompleted(false)
    },
  })
}

export default useCancelCandidate
