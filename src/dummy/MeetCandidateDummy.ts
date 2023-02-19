import { MeetApplicant, MeetApplicantsResponse } from '@types'

export const MEET_CANDIDATE_DUMMY: MeetApplicant[] = [
  {
    profile: {
      id: 1,
      imgUrl: 'https://picsum.photos/400/500?random=1',
      name: '프로필 댄스팀 이름',
      description: '프로필 상세설명',
      openChatUrl: 'https://www.allsilver.dev/',
      location: '부산',
    },
    matched: false,
  },
  {
    profile: {
      id: 2,
      imgUrl: 'https://picsum.photos/400/500?random=2',
      name: '프로필 댄스팀 이름',
      description: '프로필 상세설명',
      openChatUrl: 'https://www.allsilver.dev/',
      location: '경기',
    },
    matched: true,
  },
  {
    profile: {
      id: 3,
      imgUrl: 'https://picsum.photos/400/500?random=3',
      name: '프로필 댄스팀 이름',
      description: '프로필 상세설명',
      openChatUrl: 'https://www.allsilver.dev/',
      location: '서울',
    },
    matched: true,
  },
]
