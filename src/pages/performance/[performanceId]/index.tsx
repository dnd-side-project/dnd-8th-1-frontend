import Head from 'next/head'
import {
  PerformanceDetailSectionTop,
  PerformanceSectionMiddle,
  PerformanceInfo,
  Spacer,
  ProfileLinkButton,
  PerformanceReviewSection,
} from '@components'
import { useDisclosure } from '@hooks'
import { Center } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { Comment } from '@types'

const CancelSubmitModal = dynamic(
  () => import('../../../components/templates/CancelSubmitModal'),
  {
    ssr: false,
  },
)

const PERFORMANCE_DETAIL_DUMMY = {
  id: 1,
  title: '공연제목 어쩌고저쩌고',
  imgUrl: 'https://picsum.photos/500/500?random=3',
  startDate: '2023-02-14T17:00:00',
  startTime: '2023-02-14T17:00:00',
  location: '부산',
  genres: ['힙합', '커버댄스'],
  description:
    '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다. 로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소',
  address: '소환사의 협곡',
  profile: {
    id: 2,
    imgUrl: 'https://picsum.photos/500/500?random=2',
    name: '댄스팀',
  },
}

const PERFORMANCE_REVIEW_DUMMY: Comment[] = [
  {
    content:
      '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다.',
    reviewId: 1,
    profile: {
      id: 1,
      name: '작성자이름',
    },
    createdDate: '2023-07-01T12:00:00',
  },
  {
    content:
      '로렘 입숨은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트이다.',
    reviewId: 2,
    profile: {
      id: 2,
      name: '작성자이름',
    },
    createdDate: '2023-07-01T12:00:00',
  },
]

const PerformanceDetailPage = () => {
  const {
    id,
    title,
    imgUrl,
    startDate,
    profile,
    location,
    genres,
    startTime,
    address,
    description,
  } = PERFORMANCE_DETAIL_DUMMY
  const [showDeleteModal, setShowDeleteModal, handleDeleteModalToggle] =
    useDisclosure()

  return (
    <>
      <Head>
        <title>공연 정보 - Danverse </title>
      </Head>

      <main>
        <Center className="flex-col">
          <PerformanceDetailSectionTop
            title={title}
            startDate={startDate}
            imgUrl={imgUrl}
            publisherId={profile.id}
            performanceId={id}
            handleOnDelete={handleDeleteModalToggle}
          />

          {showDeleteModal && (
            <CancelSubmitModal
              showModal={showDeleteModal}
              setShowModal={setShowDeleteModal}
              modalContent="공연 정보를 삭제할까요?"
              modalDescription="삭제한 공연은 되돌릴 수 없어요."
              submitMessage="네, 삭제할게요"
              handleOnSubmit={() => {
                // TODO: 삭제 api 호출
                console.log('개시글 삭제')
                setShowDeleteModal(false)
              }}
            />
          )}

          <PerformanceSectionMiddle
            startDate={startDate}
            title={title}
            location={location}
            genres={genres}
          />

          <Spacer size={12} />

          <PerformanceInfo startTime={startTime} address={address} />

          <Spacer size={17} />

          <div className="px-[16px]">
            <h2 className=" text-body1 leading-none">공연 설명</h2>
            <Spacer size={9} />
            <p className="text-body2">{description}</p>
          </div>

          <Spacer size={34} />

          <ProfileLinkButton
            profileId={profile.id}
            profileImage={profile.imgUrl}
            profileName={profile.name}
          />
        </Center>

        <Spacer size={60} />

        <PerformanceReviewSection
          startDate={startDate}
          reviews={PERFORMANCE_REVIEW_DUMMY}
          handleOnDelete={(reviewId) => {
            // TODO: 삭제 api 호출
            console.log(reviewId, '삭제!')
          }}
          handleOnSubmit={(reviewContent: string) => {
            console.log(reviewContent)
          }}
        />
      </main>
    </>
  )
}

export default PerformanceDetailPage
