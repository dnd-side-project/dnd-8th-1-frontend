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
}
