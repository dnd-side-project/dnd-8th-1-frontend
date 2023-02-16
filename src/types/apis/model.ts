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
  id: string // 프로필 아이디
  imgUrl: string // 프로필 이미지 url
  name: string // 프로필 댄스팀 이름
}

export interface Meet {
  id: number
  title: string
  location: string
  type: string
  imgUrl: string
  deadline: string
  profile: Profile
}

// TODO: 명세 변경 부분 있으므로 임시 주석 처리 (해당 부분 작업할 때 채워넣기)
// export interface MeetDetail
//    {
//   /**
//    * TODO : 왜 meet랑 meetdetail의 profile 필드가 각각 다를까?
//    */
//   profile?: Pick<Meet, 'profileId' | 'profileName' | 'profileImg'>
//   recruitType?: string
//   description?: string
//   recruitCount?: number
//   /**
//    * TODO : 마감 여부 boolean 필요
//    */
// }

export interface MeetCandicate
  extends Pick<
    User,
    'profileId' | 'profileImg' | 'profileName' | 'openChatUrl' | 'location'
  > {
  /**
   * TODO : descrption이랑 profileDescription이 다른건가? 같은거 같은데 필드가 User와 다르다
   */
  profileDescription?: string
  isMatched?: boolean
}

export interface MeetAccept {
  profileIds?: string[]
}

export interface PerformanceImminent {
  id?: string
  title?: string
  startDate?: string
  image?: string
}

export interface Performance {
  performId: string
  performTitle: string
  performImg: string
  performStartDate: string
  performLocation: RegionTypes
  performGenres: GenreTypes[]
  profile: {
    id: string
    imgUrl: string
    name: string
  }
}

export interface PerformanceDetail extends Performance {
  performStartTime?: string
  performDescription?: string
  performAddress?: string
}

export interface CommentCreate {
  review?: string
}

export interface Comment {
  reviewContent?: string
  reviewId?: string
  writerName?: string
  createdDate?: string
}

// export interface PerformanceSearch {
// }
