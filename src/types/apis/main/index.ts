import { BaseResponse, MainComment, Profile } from '@types'

export interface MainCommentResponse extends BaseResponse {
  data: MainComment[]
}

export interface MainProfileResponse extends BaseResponse {
  data: Pick<Profile, 'id' | 'name' | 'imgUrl' | 'type'>[]
}
