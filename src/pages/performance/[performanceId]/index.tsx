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
import { GetServerSideProps } from 'next'
import {
  useCreateReview,
  useDeletePerformance,
  useDetailPerformance,
  fetchPerformanceDetail,
  useGetReviews,
  fetchReviews,
  useDeleteReview,
} from '@queries'

import { dehydrate, QueryClient } from '@tanstack/react-query'
import { performanceKeys } from 'queries/performance/performanceKeys'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { userAtom } from 'states'

const CancelSubmitModal = dynamic(
  () => import('../../../components/templates/CancelSubmitModal'),
  {
    ssr: false,
  },
)

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = parseInt(context.params?.performanceId as string)
  const queryClient = new QueryClient()

  await Promise.all([
    queryClient.prefetchQuery(performanceKeys.detail(id), () =>
      fetchPerformanceDetail(id),
    ),
    queryClient.prefetchQuery(performanceKeys.reviews(id), () =>
      fetchReviews(id),
    ),
  ])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

const PerformanceDetailPage = () => {
  const router = useRouter()
  const { performanceId } = router.query
  const pathId = parseInt(performanceId as string)

  const {
    data: performance,
    isLoading: isPerformanceLoading,
    isError: isPerformanceError,
  } = useDetailPerformance(pathId)
  const {
    data: review,
    isLoading: isReviewLoading,
    isError: isReviewError,
  } = useGetReviews(pathId)

  const [showDeleteModal, setShowDeleteModal, handleDeleteModalToggle] =
    useDisclosure()

  const { id: userId } = useRecoilValue(userAtom)

  const { mutate: requestDeleteReview } = useDeleteReview(
    performance?.data?.id as number,
  )
  const { mutate: requestCreateReview } = useCreateReview(
    performance?.data?.id as number,
  )
  const { mutate: requestDeletePerformance } = useDeletePerformance()

  // TODO: 로딩 중 처리
  if (
    isPerformanceLoading ||
    isPerformanceError ||
    isReviewLoading ||
    isReviewError
  ) {
    return <div>상세 조회 로딩중...</div>
  }
  const performanceData = performance.data
  const reviewData = review.data

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
  } = performanceData

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
            isPublisher={userId === profile.id}
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
                setShowDeleteModal(false)
                requestDeletePerformance(id)
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
        </Center>

        <Spacer size={17} />

        <div className="px-[16px] ">
          <h2 className=" text-body1 leading-none">공연 설명</h2>
          <Spacer size={9} />
          <p className="whitespace-pre-wrap text-body2">{description}</p>
        </div>

        <Spacer size={34} />

        <div className="px-[16px]">
          <ProfileLinkButton
            profileId={profile.id}
            profileImage={profile.imgUrl}
            profileName={profile.name}
          />
        </div>

        <div className="mt-[29px] mb-[21px] h-[10px] w-full bg-[#161616]" />

        <PerformanceReviewSection
          startDate={startDate}
          reviews={reviewData.data}
          handleOnDelete={(reviewId) => {
            requestDeleteReview(reviewId)
          }}
          handleOnSubmit={(reviewContent: string) => {
            requestCreateReview({ review: reviewContent })
          }}
        />
      </main>
    </>
  )
}

export default PerformanceDetailPage
