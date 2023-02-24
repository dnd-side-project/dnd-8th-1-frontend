import { unAuthInstance } from 'apis/utils'

export const performanceAPI = {
  // 검색 조회
  search: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  },
}
