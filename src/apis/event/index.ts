import { authRequest, unAuthRequest } from 'apis/common'
import {
  MeetEditRequest,
  MeetAcceptRequest,
  MeetApplyRequest,
  MeetCloseRequest,
} from '@types'

const eventAPI = {
  // 이벤트 전체 조회
  getAll: () => {
    return unAuthRequest.get(`api/v1/events`)
  },
  //이벤트 글 상세 조회
  getDetail: (eventId: number) => {
    return unAuthRequest.get(`api/v1/events/${eventId}`)
  },
  // 이벤트 글 등록
  create: (payload: MeetEditRequest) => {
    return authRequest.post(`api/v1/events/`, payload)
  },
  // TODO: 이벤트 글 삭제 (미구현)
  // delete: () => {
  //   return authRequest.delete(`/api/v1/events/${eventId}`)
  // },
  // TODO: 이벤트 글 수정 (미구현)
  // update: (eventId: number, payload: MeetEditRequest) => {
  //   return authRequest.patch(`api/v1/events/${eventId}`, payload)
  // },
  // 이벤트 신청
  apply: (payload: MeetApplyRequest) => {
    return authRequest.post(`api/v1/events/match`, payload)
  },
  // TODO: 조기 마감(미구현)
  // close: (eventId: number, payload: MeetCloseRequest) => {
  //   return authRequest.patch(`api/v1/events/`, payload)
  // },
  // 이벤트 지원 취소
  cancel: (eventId: number) => {
    return authRequest.delete(`api/v1/events/${eventId}/cancel-apply`)
  },
  // 이벤트 신청자 리스트 조회
  getApplicants: (eventId: number) => {
    return authRequest.post(`api/v1/${eventId}/applicants`)
  },
  // 이벤트 지원자 요청 수락
  accept: (eventId: number, payload: MeetAcceptRequest) => {
    return authRequest.post(`api/v1/events/${eventId}`, payload)
  },
  uploadImage: () => {
    return authRequest.post(`api/v1/events/image`)
  },
}

export default eventAPI
