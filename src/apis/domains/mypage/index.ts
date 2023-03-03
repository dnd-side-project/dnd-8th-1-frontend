import { authInstance } from '@apis'

export const myPageAPI = {
  // 작성한 이벤트 조회
  getEvents: () => {
    return authInstance.get(`/api/v1/mypage/events`)
  },
  // 지원한 이벤트 조회
  getAppliedEvents: () => {
    return authInstance.get(`/api/v1/mypage/events/applications`)
  },
  // 작성한 공연 조회
  getPerformances: () => {
    return authInstance.get(`/api/v1/mypage/performances`)
  },
  // 작성한 후기 조회
  getReview: () => {
    return authInstance.get(`/api/v1/mypage/performances/reviews`)
  },
}
