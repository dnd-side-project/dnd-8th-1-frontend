import { eventAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { MeetEditRequest } from '@types'
import { AxiosResponse } from 'axios'
import { useRouter } from 'next/router'
import { meetKeys } from '@queries'

const postMeetCreate = async (payload: MeetEditRequest) => {
  const { data }: AxiosResponse<MeetEditRequest> = await eventAPI.create(
    payload,
  )
  return data
}

const useCreateMeet = () => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation((payload: MeetEditRequest) => postMeetCreate(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries(meetKeys.candidate)
      router.push('/meet')
    },
  })
}

export default useCreateMeet
