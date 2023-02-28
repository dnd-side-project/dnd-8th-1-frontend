import { eventAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { MeetApplicantsResponse } from '@types'
import { useQuery } from '@tanstack/react-query'
import { meetKeys } from '@queries'

const getCandidate = async (eventId: number) => {
  const { data }: AxiosResponse<MeetApplicantsResponse> =
    await eventAPI.getApplicants(eventId)
  return data
}

const useCandidate = (eventId: number) => {
  return useQuery([meetKeys.candidate], () => getCandidate(eventId), {
    enabled: !!eventId,
  })
}

export default useCandidate
