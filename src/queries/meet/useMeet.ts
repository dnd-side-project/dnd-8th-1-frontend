import { eventAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { MeetResponse } from '@types'
import { AxiosResponse } from 'axios'

interface MeetPayload {
  page: number
  size: number
  location: string
  type: string
}

const getMeet = async ({
  page,
  size,
  location,
  type,
}: {
  page: number
  size: number
  location: string
  type: string
}) => {
  const { data }: AxiosResponse<MeetResponse> = await eventAPI.getAll(
    location,
    type,
    page,
    size,
  )
  return data
}

const useMeet = (payload: MeetPayload) => {
  const { page, size, location, type } = payload
  return useQuery(['meet', page, size, location, type], () => getMeet(payload))
}

export default useMeet
