import { BaseResponse, MyEvent, Profile, AppliedEvent } from '@types'
interface MyEventResponse extends BaseResponse {
  data: MyEvent[]
}

// 임박한 공연 조회 응답
export interface ProfileRandomResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>[]
}

// 활동내역, 내가 지원한 이벤트 조회
interface AppliedEventResponse extends BaseResponse {
  data: AppliedEvent[]
}
