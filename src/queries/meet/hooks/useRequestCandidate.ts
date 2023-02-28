import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetApplyRequest } from '@types'
import { Dispatch, SetStateAction } from 'react'
import { meetKeys } from '@queries'

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
        queryClient.invalidateQueries(meetKeys.candidate)
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
