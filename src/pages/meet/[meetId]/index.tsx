import {
  Avatar,
  Dimmed,
  IconButton,
  MeetDetailCard,
  MeetDetailImage,
  StatusPopupContent,
  Tags,
  ProfileRegisterContent,
} from '@components'
import { useDisclosure } from '@hooks'
import { meetKeys, useCancelCandidate, useRequestCandidate } from '@queries'
import {
  GenreTypes,
  MeetDetailResponse,
  RecruitmentType,
  RegionTypes,
} from '@types'
import { isDeadLine } from '@utils'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useMeetDetail, getMeetDetail } from '@queries'
import { useEffect, useState } from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { ACCESS_TOKEN_KEY } from '@constants'
import { userAtom } from 'states'
import { useRecoilValue } from 'recoil'
import Head from 'next/head'

const MeetDeleteModal = dynamic(
  () => import('../../../components/organisms/MeetDeleteModal'),
  {
    ssr: false,
  },
)
const CandidateBottomSheet = dynamic(
  () => import('../../../components/organisms/CandidateBottomSheet'),
  {
    ssr: false,
  },
)
const CandidateCancelModal = dynamic(
  () => import('../../../components/organisms/CandidateCancelModal'),
  {
    ssr: false,
  },
)
const CandidateModal = dynamic(
  () => import('../../../components/organisms/CandidateModal'),
  {
    ssr: false,
  },
)

const ModalWithSingleButton = dynamic(
  () => import('../../../components/templates/ModalWithSingleButton'),
  {
    ssr: false,
  },
)

const ConfirmModal = dynamic(
  () => import('../../../components/templates/ConfirmModal'),
  {
    ssr: false,
  },
)

interface MeetDetailPageProps {
  meetId: number
  token: string
}

const MeetDetailPage = ({ meetId, token }: MeetDetailPageProps) => {
  const fallback = {} as MeetDetailResponse
  const { data = fallback, isLoading } = useMeetDetail(meetId, token)
  const detailData = data?.data
  const router = useRouter()
  const [isStatusBarOpen, setIsStatusBarOpen] = useState(false)
  const [showDeleteModal, setDeleteShowModal, handleDeleteModalToggle] =
    useDisclosure()
  /**
   *TODO: 추후 리팩토링 대상(showCandidateModal과 겹치는 상태, 
    but 현재 모달이 useEffect로 인해 리렌더링 마다 실행되기 때문에 어쩔수 없이 사용)
   */
  const [isCandidate, setIsCandidate] = useState(false)
  const [
    showCandidateModal,
    setShowCandidateModal,
    handleCandidateModalToggle,
  ] = useDisclosure()
  const [showBottomSheet, setShowBottomSheet, handleBottomToggle] =
    useDisclosure()
  const [showCancelModal, setShowCancelModal, handleCancelModalToggle] =
    useDisclosure()

  const [showprofileModal, setShowProfileModal] = useDisclosure()
  const [showLoginModal, setShowLoginModal] = useDisclosure()
  const { id, hasProfile } = useRecoilValue(userAtom)
  const isMyPost = id === detailData?.profile.id

  /**
   *TODO: 백엔드로 부터 데이터 받아오는 로직으로 변경되어야 함
   */
  const [isCompleted, setIsCompleted] = useState(false)

  const { mutate: requestMeetCandidate } = useRequestCandidate(
    meetId,
    setIsCompleted,
    setIsCandidate,
  )
  const { mutate: requestCancelCandidate } = useCancelCandidate(
    meetId,
    setIsCompleted,
  )
  if (isLoading) {
    return <div></div>
  }
  return (
    <>
      <Head>
        <title>만나기 상세 - Danverse</title>
      </Head>
      {showDeleteModal && (
        <>
          <MeetDeleteModal
            id={meetId}
            showModal={showDeleteModal}
            setShowModal={setDeleteShowModal}
          />
          <Dimmed
            styleClass="min-h-full"
            handleOnClick={() => setDeleteShowModal(false)}
          />
        </>
      )}
      {showCandidateModal && isCandidate && (
        <>
          <CandidateModal
            showModal={showCandidateModal}
            setShowModal={setShowCandidateModal}
            title={detailData?.title as string}
            profileId={detailData?.profile.id as number}
          />
          <Dimmed
            styleClass="min-h-full"
            handleOnClick={() => setShowCandidateModal(false)}
          />
        </>
      )}
      {showCancelModal && (
        <>
          <CandidateCancelModal
            showModal={showCancelModal}
            setShowModal={setShowCancelModal}
            title={detailData?.title as string}
          />
          <Dimmed
            styleClass="min-h-full"
            handleOnClick={() => setShowCandidateModal(false)}
          />
        </>
      )}
      <CandidateBottomSheet
        handleOnClickSubmit={() => {
          handleCandidateModalToggle()
          requestMeetCandidate({ eventId: meetId })
        }}
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
        /**
         *TODO: 변경 되어야 할 부분(유저 데이터로 채워야 함)
         */
        openchatUrl="https://open.kakao.com/o/g2g5b5b9"
      />
      <header className="w-full">
        <MeetDetailImage
          imgUrl={detailData?.imgUrl as string}
          deadline={detailData?.deadline as string}
        />
      </header>
      <main className="relative z-[0] mt-[-10px] w-[375px] rounded-t-[10px] bg-gray-900 px-[16px] py-[18px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              profileImage={detailData?.profile.imgUrl as string}
              shape="circle"
              size={30}
              styleClass="border border-gray-700"
            />
            <span className="ml-[10px] text-body2 font-bold text-gray-300">
              {detailData?.profile.name}
            </span>
          </div>
          {/**
           * TODO: 유저 데이터 받을 경우 새로운 분기 처리 필요
           */}
          {isMyPost && (
            <IconButton
              handleOnClick={() => {
                setIsStatusBarOpen(!isStatusBarOpen)
              }}
              icon="dots"
              size={24}
              areaLabel="수정하기/삭제하기 팝업을 열기위한 버튼"
            />
          )}
        </div>
        {isStatusBarOpen && (
          <div className="absolute right-[16px] z-[990] rounded-[8px] bg-gray-700 py-[14px] px-[10px]">
            <StatusPopupContent
              handleOnModify={() => {
                router.push(`/meet/edit/${detailData?.id}`)
              }}
              handleOnDelete={() => {
                setIsStatusBarOpen(false)
                handleDeleteModalToggle()
              }}
            />
          </div>
        )}
        <p className="mt-[26px] mb-[24px] text-headline font-bold text-gray-100">
          {detailData?.title}
        </p>
        <div className="mb-[26px]">
          {/**
           *TODO: as 키워드 붙인 부분 모두 수정 예정
           */}
          <Tags
            tagStyle="bg-gray-700"
            textStyle="text-gray-300"
            tags={[
              detailData?.location as RegionTypes,
              detailData?.type as GenreTypes,
            ]}
          />
        </div>
        <MeetDetailCard
          location={detailData?.location as RegionTypes}
          deadline={detailData?.deadline as string}
          recruitType={detailData?.recruitType as RecruitmentType}
          recruitCount={detailData?.recruitCount as number}
        />
        <p className="mt-[24px] whitespace-pre-wrap break-words">
          {detailData?.description}
        </p>
      </main>
      <div className="fixed bottom-[17px] mx-[auto] h-[102px] w-[375px] bg-darken_gradient">
        {isDeadLine(detailData?.deadline as string) ? (
          <button
            disabled
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-gray-600 text-subtitle font-bold text-gray-400"
          >
            마감되었어요!
          </button>
        ) : isMyPost ? (
          // TODO: 코드리뷰 시 분기처리 확인 부탁합니다.
          <button
            onClick={() => router.push(`/meet/${detailData?.id}/candidate`)}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            신청자 확인하기
          </button>
        ) : !isCompleted && !detailData?.applied ? (
          <button
            onClick={() => {
              if (id === null) {
                setShowLoginModal(true)
                return
              }

              if (!hasProfile) {
                setShowProfileModal(true)
                return
              }

              handleBottomToggle()
            }}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            신청하기
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleCancelModalToggle()
              requestCancelCandidate(meetId)
            }}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            신청 취소하기
          </button>
        )}
      </div>
      <ModalWithSingleButton
        showModal={showprofileModal}
        setShowModal={setShowProfileModal}
        handleOnClick={() => router.push(`/profile/${id}/edit`)}
        submitMessage={'프로필 등록하기'}
        hasCloseButton={true}
      >
        <ProfileRegisterContent />
      </ModalWithSingleButton>

      <ConfirmModal
        showModal={showLoginModal}
        setShowModal={setShowLoginModal}
        handleOnSubmit={() => router.push('/signin')}
        modalContent={'로그인 후 이용이 가능합니다.'}
        submitMessage={'로그인 하기'}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}: GetServerSidePropsContext) => {
  // TODO: 새로고침 시 에러 생김
  const accessToken = req.cookies[ACCESS_TOKEN_KEY]
    ? req.cookies[ACCESS_TOKEN_KEY]
    : ''

  const queryClient = new QueryClient()
  const meetId = parseInt(params?.meetId as string)

  try {
    await queryClient.prefetchQuery(meetKeys.detail(meetId, accessToken), () =>
      getMeetDetail(meetId, accessToken),
    )
  } catch (e) {
    res.setHeader('Set-Cookie', [`ACCESS_TOKEN=deleted; Max-Age=0`])
  }

  return {
    props: {
      meetId,
      dehydratedState: dehydrate(queryClient),
      token: accessToken,
    },
  }
}

export default MeetDetailPage
