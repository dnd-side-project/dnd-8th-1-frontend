import { authInstance, unAuthInstance } from '@apis'
import { CommentCreate, PerformanceEditRequest } from '@types'

export const performanceAPI = {
  // 공연 정보 검색 조회
  getSearchResult: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  },
  // 공연 정보 전체 조회(페이지네이션)
  getAll: (
    year: number | '' = '',
    month: number | '' = '',
    day: number | '' = '',
    location = '',
    genre = '',
    pageNumber = 0,
    pageSize = 15,
  ) => {
    return unAuthInstance.get(
      `/api/v1/performances?year=${year}&month=${month}&day=${day}&location=${location}&genre=${genre}&page=${pageNumber}&size=${pageSize}`,
    )
  },
  // 임박한 공연 정보 조회
  getImminent: () => {
    return unAuthInstance.get(`/api/v1/performances/imminent`)
  },
  // 공연 상세 조회
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
  // 공연 정보글 삭제
  delete: (performanceId: number) => {
    return authInstance.delete(`/api/v1/performances/${performanceId}`)
  },
  // 공연 정보 수정
  edit: (payload: PerformanceEditRequest & { id: number }) => {
    return authInstance.patch('/api/v1/performances', payload)
  },
  // 팀 이름으로 공연 검색
  search: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  },
  // 리뷰 삭제
  deleteReview: (reviewId: number) => {
    return authInstance.delete(`/api/v1/performances/reviews/${reviewId}`)
  },
  // 공연 등록
  create: (payload: PerformanceEditRequest) => {
    return authInstance.post('/api/v1/performances', payload)
  },
  //공연 이미지 업로드
  uploadImage: (payload: FormData) => {
    return authInstance.post(`api/v1/performances/image`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
