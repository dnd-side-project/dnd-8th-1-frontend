/* eslint-disable @typescript-eslint/no-explicit-any */
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
    onSuccess: (data) => {
      queryClient.invalidateQueries(meetKeys.candidate)
      router.push(`/meet/${(data as any).data.id}`)
    },
  })
}

export default useCreateMeet
