import { BaseResponse, MyPerformance, MyEvent, Profile, MyReview } from '@types'

interface MyEventResponse extends BaseResponse {
  data: MyEvent[]
}

// 임박한 공연 조회 응답
export interface ProfileRandomResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>[]
}

// 활동내역, 내가 등록한 공연 조회
interface MyPerformanceResponse extends BaseResponse {
  data: MyPerformance[]
}
// 활동내역, 내가 등록한 후기 조회
interface MyReviewResponse extends BaseResponse {
  data: MyReview[]
}
