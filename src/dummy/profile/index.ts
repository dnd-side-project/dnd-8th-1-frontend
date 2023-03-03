import {
  AppliedEvent,
  GenreTypes,
  MyEvent,
  MyPerformance,
  MyReview,
  RecruitmentType,
  RegionTypes,
} from '@types'

// 프로필 조회
const descriptionLong =
  '로렘 입숨은 출판이나 그래픽 디자인 \n\n분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나시각적 연출을 보여줄 때 사용하는 표준 채우기텍스트로, 최종 결과를 더.로렘 입숨은 출판이나 그래픽 디자인 \n\n분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나시각적 연출을 보여줄 때 사용하는 표준 채우기텍스트로, 최종 결과를 더'

const PROFILE_DUMMY = {
  id: 11,
  name: '아이키',
  imgUrl: 'https://picsum.photos/500',
  location: '부산' as RegionTypes,
  genre: ['커버댄스', '스트릿댄스'] as GenreTypes[],
  startDate: '2011-01-05',
  description: descriptionLong,
  openChatUrl: 'https://www.allsilver.dev/',
  portfolio: {
    youtubeUrl: 'https://www.allsilver.dev/',
    instagramUrl: 'https://www.allsilver.dev/',
    tiktokUrl: 'https://www.allsilver.dev/',
  },
  type: '댄스팀' as RecruitmentType,
}

// TODO: 백엔드와 협의 안됨
const MEMBER_DUMMY = {
  id: 1,
  name: '아이키',
  imgUrl: 'https://picsum.photos/500',
  email: '123@naver.com',
  isSignUp: true,
  role: '권한',
  profile: PROFILE_DUMMY,
  // 프로필 없는 경우
  // profile: null as unknown as Profile,
}

// 활동 내역

// 만나기 - 등록
export const MY_EVENT_DUMMY_SINGLE: MyEvent = {
  id: 1,
  createdAt: '2022-12-31T23:59:59',
  title:
    '저희 팀과 함께 콜라보 영상 촬영영저희 팀과 함께 콜라보 영상 촬저희 팀과 함께 콜라보 영상 촬',
  imgUrl: 'https://picsum.photos/500',
  profile: { name: '이벤트 주최자 이름' },
  isMatched: true,
  type: '콜라보',
}

export const MY_EVENT_DUMMY: MyEvent[] = Array.from({ length: 15 }, (_, i) => {
  return {
    ...MY_EVENT_DUMMY_SINGLE,
    id: i,
    imgUrl: `https://picsum.photos/500?random=${i}`,
    isMatched: i % 2 === 0,
  }
})

// 만나기 - 신청
export const MY_APPLIED_DUMMY_SINGLE: AppliedEvent = {
  id: 1,
  appliedAt: '2022-12-31T23:59:59',
  title:
    '저희 팀과 함께 콜라보 영상 촬영영저희 팀과 함께 콜라보 영상 촬저희 팀과 함께 콜라보 영상 촬',
  imgUrl: 'https://picsum.photos/500',
  profile: { name: '이벤트 주최자 이름' },
  isMatched: true,
  //  type: '콜라보',
}

export const MY_APPLIED_DUMMY: AppliedEvent[] = Array.from(
  { length: 15 },
  (_, i) => {
    return {
      ...MY_APPLIED_DUMMY_SINGLE,
      id: i,
      imgUrl: `https://picsum.photos/500?random=${i}`,
      isMatched: i % 2 === 0,
    }
  },
)

// 공연 - 내가 등록한
export const MY_PERFORMANCE_DUMMY_SINGLE: MyPerformance = {
  id: 1,
  createdAt: '2022-12-31T23:59:59',
  title:
    '저희 팀과 함께 콜라보 영상 촬영영저희 팀과 함께 콜라보 영상 촬저희 팀과 함께 콜라보 영상 촬',
  imgUrl: 'https://picsum.photos/500',
  profile: { name: '내이름' },
}

export const MY_PERFORMANCE_DUMMY: MyPerformance[] = Array.from(
  { length: 15 },
  (_, i) => {
    return {
      ...MY_PERFORMANCE_DUMMY_SINGLE,
      id: i,
      imgUrl: `https://picsum.photos/500?random=${i}`,
    }
  },
)

// 공연 - 리뷰
export const MY_REVIEW_DUMMY_SINGLE: MyReview = {
  id: 1,
  createdAt: '2022-12-31T23:59:59',
  review:
    '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다',
  performance: {
    id: 1,
    title: '공연: 여기에 제목',
  },
}

export const MY_REVIEW_DUMMY: MyReview[] = Array.from(
  { length: 15 },
  (_, i) => {
    return {
      ...MY_REVIEW_DUMMY_SINGLE,
      id: i,
    }
  },
)
