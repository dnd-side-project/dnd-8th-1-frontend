import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { meetKeys } from '@queries'
import { getAccessToken } from '@utils'

const deleteCandidate = async (eventId: number) => {
  const { data } = await eventAPI.cancel(eventId)
  return data
}

const useCancelCandidate = (
  eventId: number,
  setIsCompleted: Dispatch<SetStateAction<boolean>>,
) => {
  const queryClient = useQueryClient()
  const accessToken = getAccessToken()

  return useMutation((eventId: number) => deleteCandidate(eventId), {
    onSuccess: () => {
      queryClient.invalidateQueries(
        meetKeys.detail(eventId, accessToken ? accessToken : ''),
      )
      setIsCompleted(false)
    },
  })
}

export default useCancelCandidate
