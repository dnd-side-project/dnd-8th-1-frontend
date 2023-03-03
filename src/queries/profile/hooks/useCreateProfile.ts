import { profileAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProfileEditRequest } from '@types'
import { profileKeys } from '@queries'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { userAtom } from 'states'

export const postCreateProfile = async (payload: ProfileEditRequest) => {
  const { data } = await profileAPI.createProfile(payload)
  return data
}

export const useCreateProfile = (memberId: number) => {
  const queryClient = useQueryClient()
  const router = useRouter()

  const [user, setUser] = useRecoilState(userAtom)

  return useMutation(
    (payload: ProfileEditRequest) => postCreateProfile(payload),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(profileKeys.detail(memberId))

        setUser({
          ...user,
          profile: { ...data.data },
          hasProfile: true,
        })

        router.push(`/profile/${memberId}`)
      },
    },
  )
}
