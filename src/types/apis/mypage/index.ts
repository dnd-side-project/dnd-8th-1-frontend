import {
  AppliedEvent,
  BaseResponse,
  MyEvent,
  MyPerformance,
  MyReview,
} from '@types'

// 활동내역, 내가 작성한 이벤트 조회
export interface MyEventResponse extends BaseResponse {
  data: MyEvent[] | null
}

// 활동내역, 내가 지원한 이벤트 조회
export interface AppliedEventResponse extends BaseResponse {
  data: AppliedEvent[] | null
}

// 활동내역, 내가 등록한 공연 조회
export interface MyPerformanceResponse extends BaseResponse {
  data: MyPerformance[] | null
}

// 활동내역, 내가 등록한 후기 조회
export interface MyReviewResponse extends BaseResponse {
  data: MyReview[]
}
