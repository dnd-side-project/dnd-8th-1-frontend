import { useQuery } from '@tanstack/react-query'
import { eventAPI } from '@apis'
import { AxiosResponse } from 'axios'
import { MeetDetailResponse } from '@types'
import { meetKeys } from '@queries'
import { getAccessToken } from '@utils'

export const getMeetDetail = async (eventId: number, token?: string) => {
  const { data }: AxiosResponse<MeetDetailResponse> = await eventAPI.getDetail(
    eventId,
    token,
  )
  return data
}

const useMeetDetail = (eventId: number, token?: string) => {
  const csrToken = getAccessToken()

  return useQuery(
    meetKeys.detail(eventId, token ? token : csrToken ? csrToken : ''),
    () => getMeetDetail(eventId, token),
    {
      enabled: !!eventId,
    },
  )
}

export default useMeetDetail
