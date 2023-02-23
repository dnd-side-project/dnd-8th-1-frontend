import { useQuery } from '@tanstack/react-query'
import { eventAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { MeetDetailResponse } from '@types'

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
  return useQuery(['meetDetail', eventId], () => getMeetDetail(eventId), {
    enabled: !!eventId,
    initialData: meetDetailData,
  })
}

export default useMeetDetail
