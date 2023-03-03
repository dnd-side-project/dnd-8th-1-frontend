import { profileAPI } from '@apis'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ProfileEditRequest } from '@types'
import { useRouter } from 'next/router'
import { profileKeys } from '@queries'
import { useRecoilState } from 'recoil'
import { userAtom } from 'states'

export const patchModifyProfile = async (payload: ProfileEditRequest) => {
  const { data } = await profileAPI.modifyProfile(payload)
  return data
}

export const useModifyProfile = (memberId: number) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const [user, setUser] = useRecoilState(userAtom)

  return useMutation(
    (payload: ProfileEditRequest) => patchModifyProfile(payload),
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
