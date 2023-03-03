import { profileAPI } from '@apis'
import { useMutation } from '@tanstack/react-query'
import { ProfileEditRequest } from '@types'
import { UseFormSetValue } from 'react-hook-form'

export const postUploadImage = async (image: FormData) => {
  const { data } = await profileAPI.uploadImage(image)
  return data
}

/**
 *TODO: setValue 로직 변경 필요
 */
export const useUploadImage = (
  setValue: UseFormSetValue<ProfileEditRequest>,
) => {
  return useMutation((image: FormData) => postUploadImage(image), {
    onSuccess: (data) => {
      setValue('imgUrl', data.data.imgUrl)
    },
  })
}
