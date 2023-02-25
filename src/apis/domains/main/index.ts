import { unAuthInstance } from '@apis'
export const mainAPI = {
  // 최근 후기 6개 조회
  getLatestReviews: () => {
    return unAuthInstance.get(`/api/v1/performances/recent/reviews`)
  },
  // 랜덤으로 프로필 6개 조회
  getRandomProfile: () => {
    return unAuthInstance.get(`/api/v1/profiles/home`)
  },
}
