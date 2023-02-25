import { GenreTypes, MeetTypes, RegionTypes } from '@types'

export interface User {
  memberId?: string
  memberName?: string
  memberEmail?: string
  isSignUp?: string
  role?: string
  profileId?: string
  profileType?: string
  profileName?: string
  profileImg?: string
  profileGenre?: string
  location?: string
  careerStartDay?: string
  description?: string
  openChatUrl?: string
  portfolioUrl?: {
    youtubeUrl?: string
    instagramUrl?: string
    twitterUrl?: string
  }
}

// TODO: User와 일부 통합될 여지가 있음
export interface Profile {
  id: number // 프로필 아이디
  imgUrl: string // 프로필 이미지 url
  name: string // 프로필 댄스팀 이름
  description: string // 프로필 상세 설명
  openChatUrl: string // 카카오 오픈 채팅 주소
  location: string
  type: string // 계정 유형, 댄서 or 댄스팀
}

export interface Meet {
  id: number
  title: string
  location: string
  type: string
  imgUrl: string
  deadline: string
  profile: Pick<Profile, 'id' | 'imgUrl' | 'name'>
}

// TODO: 명세 변경 부분 있으므로 임시 주석 처리 (해당 부분 작업할 때 채워넣기)
export interface MeetDetail {
  id: number
  profile: Pick<Profile, 'id' | 'imgUrl' | 'name'>
  title: string
  location: string
  type: MeetTypes
  imgUrl: string
  recruitType: string
  description: string
  recruitCount: number
  deadline: string
}

export interface MeetApplicant {
  profile: Omit<Profile, 'type'>
  matched: boolean
}
export interface MeetAccept {
  profileIds?: string[]
}

export interface PerformanceImminent {
  id: string
  title: string
  startDate: string
  imgUrl: string
}

export interface Performance {
  id: string
  title: string
  imgUrl: string
  startDate: string
  location: RegionTypes
  genres: GenreTypes[]
  profile: {
    id: string
    imgUrl: string
    name: string
  }
}

export interface PerformanceDetail {
  id: number
  title: string
  imgUrl: string
  startDate: string
  startTime: string
  location: string
  genres: string[]
  description: string
  address: string
  profile: Pick<Profile, 'id' | 'name' | 'imgUrl'>
}

export interface CommentCreate {
  review: string
}

export interface Comment {
  content: string
  reviewId: number
  profile: Pick<Profile, 'id' | 'name'>
  createdDate: string
}

export interface SearchResult {
  id: number
  imgUrl: string
  title: string
  startDate: string
  location: RegionTypes
  genres: GenreTypes[]
  profile: Pick<Profile, 'id' | 'imgUrl' | 'name'>
}

export interface PerformanceSearchResult {
  comming: SearchResult[]
  ended: SearchResult[]
}

export type ProfileMain = Pick<Profile, 'id' | 'imgUrl' | 'name' | 'type'>

export interface MainComment {
  content: string
  createDate: string
  hasProfile: boolean
  performance: {
    id: number
    imgUrl: string
    title: string
  }
  reviewId: number
  writer: {
    id: number
    name: string
  }
}
