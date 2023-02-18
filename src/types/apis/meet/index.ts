import {
  BaseResponse,
  Meet,
  MeetAccept,
  MeetApplicant,
  // TODO: MeetDetail 수정 후 주석 해제
  MeetDetail,
  PaginationResponse,
  RecruitmentType,
} from '@types'

// 만나기 전체 조회 응답
export interface MeetResponse extends BaseResponse {
  data: PaginationResponse<Meet>
}

// TODO: MeetDetail 수정 후 주석 해제
// 만나기 상세 조회 응답
// export interface MeetDetailResponse extends BaseResponse {
//   data?: MeetDetail
// }

// 만나기 글 등록 / 수정 요청
export type MeetEditRequest = {
  title: string
  location: string
  type: string
  imgUrl: string
  recruitType: RecruitmentType
  description: string
  recruitCount: number
  deadline: string
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
