export interface BaseResponse {
  message?: string
  status?: number
}

export interface PaginationResponse<T> {
  content: T[]
  numberOfElements: number //content의 요소가 몇개인지
  offset: number // 현재 페이지에서 시작하는 요소의 index 번호
  pageNumber: number //페이지 넘버
  pageSize: number //페이지 사이즈
  totalElements: number // 전체 요소 수
  totalPages: number
}
