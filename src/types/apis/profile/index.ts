import { BaseResponse, Profile, User } from '@types'

// 임박한 공연 조회 응답
export interface ProfileRandomResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>[]
}

// 프로필 조회
export interface ProfileResponse extends BaseResponse {
  data: Omit<User, 'role' | 'signUp'>
}
