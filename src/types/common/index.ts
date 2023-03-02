// 전역 상태 관련 타입

import { Profile } from '@types'

export interface userStateType {
  id: number | null // member Id
  imgUrl: string | null // 기본 구글 프로필 사진
  name: string | null // 기본 구글 이름
  profile: Profile | null // 프로필
  hasProfile: boolean // 프로필 보유 여부
}
