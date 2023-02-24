import { PerformanceEditRequest } from '@types'
import { authInstance, unAuthInstance } from 'apis/utils'

export const performanceAPI = {
  // 검색 조회
  search: (teamName: string) => {
    return unAuthInstance.get(`/api/v1/performances/team?name=${teamName}`)
  },
  // 공연 등록
  create: (payload: PerformanceEditRequest) => {
    return authInstance.post('/api/v1/performances', payload)
  },
}
