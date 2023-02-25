import { authInstance, unAuthInstance } from '@apis'
import { CommentCreate, PerformanceEditRequest } from '@types'

export const performanceAPI = {
  //공연 상세 조회
  getDetail: (performanceId: number) => {
    return unAuthInstance.get(`api/v1/performances/${performanceId}`)
  },
  // 공연 리뷰 조회 (TODO: 미구현)
  getReviews: (performanceId: number) => {
    return unAuthInstance.get(`api/v1/performances/${performanceId}/reviews`)
  },
  // 공연 리뷰 작성 (TODO: 미구현)
  createReview: (performanceId: number, payload: CommentCreate) => {
    return authInstance.post(
      `api/v1/performances/${performanceId}/reviews`,
      payload,
    )
  },
  // 공연 정보글 삭제 (TODO: 미구현)
  delete: (performanceId: number) => {
    return authInstance.delete(`api/v1/performances/${performanceId}`)
  },
  // 공연 정보 수정
  edit: (payload: PerformanceEditRequest & { id: number }) => {
    return authInstance.patch('/api/v1/performances', payload)
  },
  // 팀 이름으로 공연 검색
  search: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  },
}
