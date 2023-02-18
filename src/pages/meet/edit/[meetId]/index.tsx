import { MeetCreateForm } from '@components'
import { useRouter } from 'next/router'
import { RecruitmentType } from '@types'

const MEET_CREATE_DUMMY = {
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

const MeetCreatePage = () => {
  const router = useRouter()

  // TODO: meetId를 통하서 상세 조회 api 호출 후 필요한 데이터만 걸러내기
  const { meetId } = router.query

  const {
    title,
    location,
    type,
    imgUrl,
    recruitType,
    description,
    recruitCount,
    deadline,
  } = MEET_CREATE_DUMMY

  return (
    <MeetCreateForm
      previousValue={{
        title,
        location,
        type,
        imgUrl,
        recruitType,
        description,
        recruitCount,
        deadline,
      }}
      handleOnSubmit={(formValues) => console.log(formValues)}
    />
  )
}

export default MeetCreatePage
