import { ProfileEditRequest } from '@types'
import { authInstance, unAuthInstance } from '@apis'

export const profileAPI = {
  // 프로필 전체 조회
  getAllProfile: (memberId: number) => {
    return unAuthInstance.get(`/api/v1/profiles/${memberId}`)
  },
  // 프로필 이미지 등록
  uploadImage: (payload: FormData) => {
    return authInstance.post(`/api/v1/profiles/image`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  // 프로필 등록
  createProfile: (payload: ProfileEditRequest) => {
    return authInstance.post(`/api/v1/profiles`, payload)
  },
  // 프로필 수정
  modifyProfile: (payload: ProfileEditRequest) => {
    return authInstance.patch(`/api/v1/profiles`, payload)
  },
}
