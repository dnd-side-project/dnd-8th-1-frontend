import { BaseResponse, User } from '@types'

export interface UserResponse extends BaseResponse {
  data?: User
}
