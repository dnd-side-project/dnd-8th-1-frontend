import {
  BaseResponse,
  MyEvent,
  Profile,
  MyReview,
  AppliedEvent,
  MyPerformance,
  User,
} from '@types'

interface MyEventResponse extends BaseResponse {
  data: MyEvent[]
}

// 임박한 공연 조회 응답
export interface ProfileRandomResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>[]
}

// 프로필 조회
export interface ProfileResponse extends BaseResponse {
  data: Omit<User, 'role' | 'signUp'>
}

// 활동내역, 내가 지원한 이벤트 조회
interface AppliedEventResponse extends BaseResponse {
  data: AppliedEvent[]
}

// 활동내역, 내가 등록한 공연 조회
interface MyPerformanceResponse extends BaseResponse {
  data: MyPerformance[]
}

// 활동내역, 내가 등록한 후기 조회
interface MyReviewResponse extends BaseResponse {
  data: MyReview[]
}
