import Head from 'next/head'
import { PerformanceDetailSectionTop } from '@components'
import { useDisclosure } from '@hooks'
import dynamic from 'next/dynamic'

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
  startDate: '2023-02-25T17:00:00',
  startTime: '2023-03-14T17:00:00',
  location: '부산',
  genres: ['힙합', '커버댄스'],
  description: '와 신난다.......',
  address: '부산시 금정구',
  profile: {
    id: 2,
    imgUrl: 'https://picsum.photos/500/500?random=2',
    name: '댄스팀',
  },
}

const PerformanceDetailPage = () => {
  const { id, title, imgUrl, startDate, profile } = PERFORMANCE_DETAIL_DUMMY
  const [showDeleteModal, setShowDeleteModal, handleDeleteModalToggle] =
    useDisclosure()

  return (
    <>
      <Head>
        <title>공연 정보 - Danverse </title>
      </Head>

      <div>
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

        <main></main>
      </div>
    </>
  )
}

export default PerformanceDetailPage
