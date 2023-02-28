import { useQuery } from '@tanstack/react-query'
import { eventAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { MeetDetailResponse } from '@types'
import { QUERY_KEY } from '@constants'

export const getMeetDetail = async (eventId: number) => {
  const { data }: AxiosResponse<MeetDetailResponse> = await eventAPI.getDetail(
    eventId,
  )
  return data
}

const useMeetDetail = (
  eventId: number,
  meetDetailData?: MeetDetailResponse,
) => {
  return useQuery([QUERY_KEY.MEET.DETAIL, eventId], () => getMeetDetail(eventId), {
    enabled: !!eventId,
    initialData: meetDetailData,
  })
}

export default useMeetDetail