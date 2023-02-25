import { unAuthInstance } from '@apis'
export const mainAPI = {
  // 후기 6개 조회
  getComment: () => {
    return unAuthInstance.get(`/api/v1/performances/recent/reviews`)
  },
  // 프로필 6개 조회
  getProfile: () => {
    return unAuthInstance.get(`/api/v1/profiles/home`)
  },
}
