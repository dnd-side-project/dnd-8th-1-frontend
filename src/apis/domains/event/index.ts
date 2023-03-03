import { getAccessToken } from '@utils'
import { authInstance, unAuthInstance } from '@apis'

import {
  MeetEditRequest,
  MeetAcceptRequest,
  MeetApplyRequest,
  MeetCloseRequest,
} from '@types'
import axios from 'axios'
const API_END_POINT = `${process.env.NEXT_PUBLIC_API_END_POINT}`

export const eventAPI = {
  // 이벤트 전체 조회
  getAll: (location = '', type = '', page = 1, size = 15) => {
    return unAuthInstance.get(
      `api/v1/events?location=${location}&type=${type}&page=${page}&size=${size}`,
    )
  },
  //이벤트 글 상세 조회
  getDetail: (eventId: number, token?: string) => {
    const accessToken = getAccessToken()

    // TODO: 서버사이드 임시 로직
    if (token) {
      return axios.get(`${API_END_POINT}api/v1/events/${eventId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
    }

    return accessToken
      ? authInstance.get(`api/v1/events/${eventId}`)
      : unAuthInstance.get(`api/v1/events/${eventId}`)
  },
  // 이벤트 글 등록
  create: (payload: MeetEditRequest) => {
    return authInstance.post(`api/v1/events/`, payload)
  },
  // 이벤트 글 삭제
  delete: (eventId: number) => {
    return authInstance.delete(`/api/v1/events/${eventId}`)
  },
  // 이벤트 글 수정
  update: (payload: MeetEditRequest) => {
    return authInstance.patch(`api/v1/events`, payload)
  },
  // 이벤트 신청
  apply: (payload: MeetApplyRequest) => {
    return authInstance.post(`api/v1/events/apply`, payload)
  },
  // 조기 마감
  close: (payload: MeetCloseRequest) => {
    return authInstance.patch(`api/v1/events/deadline`, payload)
  },
  // 이벤트 지원 취소
  cancel: (eventId: number) => {
    return authInstance.delete(`api/v1/events/${eventId}/cancel-apply`)
  },
  // 이벤트 신청자 리스트 조회
  getApplicants: (eventId: number) => {
    return authInstance.get(`api/v1/events/${eventId}/applicants`)
  },
  // 이벤트 지원자 요청 수락
  accept: (eventId: number, payload: MeetAcceptRequest) => {
    return authInstance.patch(`api/v1/events/${eventId}/accept`, payload)
  },
  uploadImage: (payload: FormData) => {
    return authInstance.post(`api/v1/events/image`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
}
