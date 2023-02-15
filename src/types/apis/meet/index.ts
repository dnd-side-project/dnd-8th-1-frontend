import {
  BaseResponse,
  Meet,
  MeetAccept,
  MeetCandicate,
  // TODO: MeetDetail 수정 후 주석 해제
  // MeetDetail,
  PaginationResponse,
} from '@types'

// 만나기 전체 조회 응답
export interface MeetResponse extends BaseResponse {
  data?: PaginationResponse<Meet>
}

// TODO: MeetDetail 수정 후 주석 해제
// 만나기 상세 조회 응답
// export interface MeetDetailResponse extends BaseResponse {
//   data?: MeetDetail
// }

// 만나기 글 등록 / 수정 요청
// export type MeetEditRequest = Omit<MeetDetail, 'profile'>

// // 만나기 글 삭제 요청
// export type MeetDeleteRequest = Pick<MeetDetail, 'eventId'>

// 만나기 신청자 조회 응답
export interface MeetCandicateResponse extends BaseResponse {
  data?: MeetCandicate[]
}

// 만나기 매칭 하기 요청
export type MeetMatchRequest = MeetAccept
