import { unAuthInstance } from 'apis/utils'

export const profileAPI = {
  // 프로필 전체 조회
  getAllProfile: (memberId: number) => {
    return unAuthInstance.get(`/api/v1/profiles/${memberId}`)
  },
}
