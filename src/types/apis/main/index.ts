import { BaseResponse, MainComment } from '@types'

export interface MainCommentResponse extends BaseResponse {
  data: MainComment[]
}
