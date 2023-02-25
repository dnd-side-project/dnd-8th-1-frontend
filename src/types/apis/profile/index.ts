import { BaseResponse, WrittenEvent } from '@types'

interface WrittenEventResponse extends BaseResponse {
  data: WrittenEvent[]
}
