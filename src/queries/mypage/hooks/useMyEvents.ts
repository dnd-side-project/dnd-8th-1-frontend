import { myPageAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { myPageKeys } from '@queries'
import { MyEventResponse } from '@types'

export const getMyEvents = async () => {
  try {
    const { data }: AxiosResponse<MyEventResponse> = await myPageAPI.getEvents()
    return data
  } catch {
    return { data: [] }
  }
}

const useMyEvents = (userId: number) => {
  return useQuery(myPageKeys.events(userId), () => getMyEvents())
}

export default useMyEvents
