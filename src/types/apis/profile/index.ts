import { BaseResponse, MyEvent, Profile } from '@types'

interface MyEventResponse extends BaseResponse {
  data: MyEvent[]
}
// 임박한 공연 조회 응답
export interface ProfileRandomResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>[]
}
