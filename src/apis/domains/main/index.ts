import { unAuthInstance } from '@apis'
export const mainAPI = {
  getComment: () => {
    return unAuthInstance.get(`/api/v1/performances/recent/reviews`)
  },
}
