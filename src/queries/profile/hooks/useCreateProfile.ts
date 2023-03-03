import { profileAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProfileEditRequest } from '@types'
import { profileKeys } from '@queries'
import { useRouter } from 'next/router'

export const postCreateProfile = async (payload: ProfileEditRequest) => {
  const { data } = await profileAPI.createProfile(payload)
  return data
}

export const useCreateProfile = (memberId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()
  return useMutation(
    (payload: ProfileEditRequest) => postCreateProfile(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(profileKeys.detail(memberId))
        router.push(`/profile/${memberId}`)
      },
    },
  )
}
