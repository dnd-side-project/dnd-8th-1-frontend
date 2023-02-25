import { Profile, BaseResponse } from '@types'

// 임박한 공연 조회 응답
export interface ProfileRandomResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>[]
}
