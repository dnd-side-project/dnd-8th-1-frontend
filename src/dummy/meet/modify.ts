import { RecruitmentType } from '@types'

export const MEET_CREATE_DUMMY = {
  id: 1,
  profile: {
    id: 23,
    name: '카라',
    imgUrl: 'https://picsum.photos/500/500?random=1',
  },
  title: '저희 팀과 함께해요!',
  location: '부산',
  type: '콜라보',
  imgUrl: 'https://picsum.photos/500/500?random=1',
  recruitType: '댄스 팀' as RecruitmentType,
  description: '상세정보',
  recruitCount: 4,
  deadline: '2023-03-14T17:00:00',
}
