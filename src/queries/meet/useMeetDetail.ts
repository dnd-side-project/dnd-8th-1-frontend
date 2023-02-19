import { useQuery } from '@tanstack/react-query'
import { eventAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { MeetDetailResponse } from '@types'

const getMeetDetail = async (eventId: number) => {
  const { data }: AxiosResponse<MeetDetailResponse> = await eventAPI.getDetail(
    eventId,
  )
  return data
}

const useMeetDetail = (eventId: number) => {
  return useQuery(['meetDetail', eventId], () => getMeetDetail(eventId), {
    enabled: !!eventId,
  })
}

export default useMeetDetail
