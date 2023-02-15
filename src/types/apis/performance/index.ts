import {
  BaseResponse,
  Comment,
  CommentCreate,
  PaginationResponse,
  Performance,
  PerformanceDetail,
  PerformanceImminent,
} from '@types'

// 임박한 공연 조회 응답
export interface PerformanceImminentResponse extends BaseResponse {
  data?: PerformanceImminent[]
}

// 공연 전체 조회 응답
export interface PerformanceResponse extends BaseResponse {
  data?: PaginationResponse<Performance>
}

// 공연 상세 조회 응답
export interface PerformanceDetailResponse extends BaseResponse {
  data?: PerformanceDetail
}

// 공연 글 등록 / 수정 요청
export interface PerformanceEditRequest
  extends Pick<
      Performance,
      'performTitle' | 'performStartDate' | 'performLocation' | 'performGenres'
    >,
    Pick<
      PerformanceDetail,
      'performStartTime' | 'performDescription' | 'performAddress'
    > {
  performImgUrl?: string
}

// 후기 글 등록 요청
export type CommentCreateRequest = CommentCreate

// 후기 전체 조회 응답
export interface CommentResponse extends BaseResponse {
  data?: Comment[]
}
