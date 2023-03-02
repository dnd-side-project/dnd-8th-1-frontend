import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { meetKeys } from '@queries'

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
      queryClient.invalidateQueries([meetKeys.candidate])
      setIsCompleted(false)
    },
  })
}

export default useCancelCandidate
