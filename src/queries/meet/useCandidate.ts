import { eventAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { MeetApplicantsResponse } from '@types'
import { useQuery } from '@tanstack/react-query'
import { QUERY_KEY } from '@constants'

const getCandidate = async (eventId: number) => {
  const { data }: AxiosResponse<MeetApplicantsResponse> =
    await eventAPI.getApplicants(eventId)
  return data
}

const useCandidate = (eventId: number) => {
  return useQuery(
    [QUERY_KEY.MEET_CANDIDATE_VIEW, eventId],
    () => getCandidate(eventId),
    {
      enabled: !!eventId,
    },
  )
}

export default useCandidate
