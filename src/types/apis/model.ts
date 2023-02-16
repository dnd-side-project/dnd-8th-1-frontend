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

export interface Meet
  extends Pick<User, 'profileId' | 'profileName' | 'profileImg'> {
  eventId?: number
  title?: string
  location?: string
  type?: MeetTypes
  eventImg?: string
  eventDeadLine?: string
  /**
   * TODO : 마감 여부 boolean 필요
   */
}

export interface MeetDetail
  extends Omit<Meet, 'profileId' | 'profileName' | 'profileImg'> {
  /**
   * TODO : 왜 meet랑 meetdetail의 profile 필드가 각각 다를까?
   */
  profile?: Pick<Meet, 'profileId' | 'profileName' | 'profileImg'>
  recruitType?: string
  description?: string
  recruitCount?: number
  /**
   * TODO : 마감 여부 boolean 필요
   */
}

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
