import { BaseResponse, MyEvent } from '@types'

interface MyEventResponse extends BaseResponse {
  data: MyEvent[]
}
