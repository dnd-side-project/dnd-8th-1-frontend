import { myPageAPI } from '@apis'
import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { myPageKeys } from '@queries'
import { AppliedEventResponse } from '@types'

export const getMyAppliedEvent = async () => {
  try {
    const { data }: AxiosResponse<AppliedEventResponse> =
      await myPageAPI.getAppliedEvents()

    return data
  } catch (e) {
    return { data: [] }
  }
}

const useMyAppliedEvent = (userId: number) => {
  return useQuery(myPageKeys.applications(userId), () => getMyAppliedEvent())
}

export default useMyAppliedEvent
