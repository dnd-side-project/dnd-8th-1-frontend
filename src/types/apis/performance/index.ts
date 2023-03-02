import {
  BaseResponse,
  Comment,
  CommentCreate,
  GenreTypes,
  PaginationResponse,
  Performance,
  PerformanceDetail,
  PerformanceImminent,
  PerformanceSearchResult,
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
  data: PerformanceDetail
}

// 공연 정보 수정 요청
export interface PerformanceEditRequest {
  title: string
  imgUrl: string
  startDate: string
  startTime: string
  location: string
  genres: GenreTypes[]
  description: string
  address: string
}

// 후기 글 등록 요청
export type CommentCreateRequest = CommentCreate

// 후기 전체 조회 응답
export interface CommentResponse extends BaseResponse {
  data: Comment[]
}

export interface SearchResultResponse extends BaseResponse {
  data?: PerformanceSearchResult
}

export interface ProfileEditRequest {
  careerStartDate: string | null
  description: string | null
  genres: GenreTypes[] | null
  imgUrl: string | null
  location: string | null
  name: string | null
  openChatUrl: string | null
  portfolioUrl: {
    instagram: string | null
    tiktok: string | null
    youtube: string | null
  }
  type: string
}
