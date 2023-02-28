import { eventAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { MeetResponse } from '@types'
import { AxiosResponse } from 'axios'
import { meetKeys } from '@queries'

interface MeetPayload {
  page: number
  size: number
  location: string
  type: string
}

export const getMeet = async ({ page, size, location, type }: MeetPayload) => {
  const { data }: AxiosResponse<MeetResponse> = await eventAPI.getAll(
    location,
    type,
    page,
    size,
  )
  return data
}

const useMeet = (payload: MeetPayload, meetAllData?: MeetResponse) => {
  const { page, size, location, type } = payload
  return useQuery(
    [...meetKeys.all, page, size, location, type],
    () => getMeet(payload),
    {
      keepPreviousData: true,
      initialData: meetAllData && meetAllData,
    },
  )
}

export default useMeet
