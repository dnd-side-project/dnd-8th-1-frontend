import {
  BaseResponse,
  Meet,
  MeetAccept,
  MeetApplicant,
  MeetDetail,
  PaginationResponse,
} from '@types'

// 만나기 전체 조회 응답
export interface MeetResponse extends BaseResponse {
  data: PaginationResponse<Meet>
}

// 만나기 상세 조회 응답
export interface MeetDetailResponse extends BaseResponse {
  data?: MeetDetail
}
export interface MeetEditRequest {
  deadline: string
  description: string
  imgUrl: string
  location: string
  recruitCount: number
  recruitType: string
  title: string
  type: string
  id: number
}

// 이벤트 지원자 요청 수락
export interface MeetAcceptRequest {
  profileId: number
}

// 이벤트 지원자 요청 신청
export interface MeetApplyRequest {
  eventId: number
}

export interface MeetCloseRequest {
  eventId: number
}

// // 만나기 글 삭제 요청
// export type MeetDeleteRequest = Pick<MeetDetail, 'eventId'>

// 만나기 신청자 조회 응답
export interface MeetApplicantsResponse extends BaseResponse {
  data?: MeetApplicant[]
}

export interface MeetCreateRequest {
  title: string
  location: string
  type: string
  imgUrl: string
  recruitType: string
  description: string
  recruitCount: number
  deadline: string
}

// 만나기 매칭 하기 요청
export type MeetMatchRequest = MeetAccept
