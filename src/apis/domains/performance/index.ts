import { unAuthInstance } from '@apis'
import { CURRENT_YEAR, CURRENT_MONTH, CURRENT_DAY } from '@constants'
export const performanceAPI = {
  // 공연 정보 검색 조회
  getSearchResult: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  },
  // 공연 정보 전체 조회(페이지네이션)
  getAll: (
    year = CURRENT_YEAR,
    month = CURRENT_MONTH,
    day: number | '' = CURRENT_DAY,
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
  // 공연 정보글 삭제 (TODO: 미구현)
  delete: (performanceId: number) => {
    return authInstance.delete(`api/v1/performances/${performanceId}`)
  },
  // 팀 이름으로 공연 검색
  search: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  }
}
