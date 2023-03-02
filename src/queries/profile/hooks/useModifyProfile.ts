import { profileAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProfileEditRequest } from '@types'
import { useRouter } from 'next/router'
import { profileKeys } from '@queries'

export const patchModifyProfile = async (payload: ProfileEditRequest) => {
  return profileAPI.modifyProfile(payload)
}

export const useModifyProfile = (memberId: number) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  return useMutation(
    (payload: ProfileEditRequest) => patchModifyProfile(payload),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(profileKeys.detail(memberId))
        router.push(`/profile/${memberId}`)
      },
    },
  )
}
