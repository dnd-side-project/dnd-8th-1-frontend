import { eventAPI } from '@apis'
import { QUERY_KEY } from '@constants'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetApplyRequest } from '@types'
import { Dispatch, SetStateAction } from 'react'

const postRequestCandidate = async (payload: MeetApplyRequest) => {
  const { data } = await eventAPI.apply(payload)
  return data
}

const useRequestCandidate = (
  eventId: number,
  setIsCompleted: Dispatch<SetStateAction<boolean>>,
  setIsCandidate: Dispatch<SetStateAction<boolean>>,
) => {
  const queryClient = useQueryClient()
  return useMutation(
    (payload: MeetApplyRequest) => postRequestCandidate(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([QUERY_KEY.MEET_CANDIDATE_VIEW, eventId])
        setIsCompleted(true)
        setIsCandidate(true)
      },
      onError: () => {
        setIsCandidate(false)
      },
    },
  )
}

export default useRequestCandidate
