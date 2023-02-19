import { eventAPI } from '@apis'
import { useMutation } from '@tanstack/react-query'

export const postCreateImageUrl = async (payload: FormData) => {
  const { data } = await eventAPI.uploadImage(payload)
  return data
}

/**
 *TODO: 추후 리팩토링이 필요한 훅(success 시 이미지 url 데이터를 useForm에 넣어줘야 하는데 아직 잘 모르겠음)
 */
const useCreateImageUrl = () => {
  return useMutation((payload: FormData) => postCreateImageUrl(payload), {
    onSuccess: (data) => {
      /**
       *TODO: 임시 로직
       */
      console.log(data)
    },
  })
}

export default useCreateImageUrl
