import {
  Avatar,
  Dimmed,
  IconButton,
  MeetDetailCard,
  MeetDetailImage,
  ProfileRegisterContent,
  StatusPopupContent,
  Tags,
} from '@components'
import { useDisclosure } from '@hooks'
import { meetKeys, useCancelCandidate, useRequestCandidate } from '@queries'
import {
  GenreTypes,
  MeetDetailResponse,
  RecruitmentType,
  RegionTypes,
} from '@types'
import { getAccessToken, isDeadLine } from '@utils'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useMeetDetail, getMeetDetail } from '@queries'
import { useState } from 'react'
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
   *TODO: ?????? ???????????? ??????(showCandidateModal??? ????????? ??????, 
    but ?????? ????????? useEffect??? ?????? ???????????? ?????? ???????????? ????????? ????????? ?????? ??????)
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
  const [showErrorTypeModal, setshowErrorTypeModal] = useDisclosure()

  const { id, hasProfile, profile } = useRecoilValue(userAtom)

  const [showLoginModal, setShowLoginModal] = useDisclosure()

  const isMyPost = id === detailData?.profile.id

  /**
   *TODO: ???????????? ?????? ????????? ???????????? ???????????? ??????????????? ???
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
        <title>????????? ?????? - Danverse</title>
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
         *TODO: ?????? ????????? ??? ??????(?????? ???????????? ????????? ???)
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
           * TODO: ?????? ????????? ?????? ?????? ????????? ?????? ?????? ??????
           */}
          {isMyPost && (
            <IconButton
              handleOnClick={() => {
                setIsStatusBarOpen(!isStatusBarOpen)
              }}
              icon="dots"
              size={24}
              areaLabel="????????????/???????????? ????????? ???????????? ??????"
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
           *TODO: as ????????? ?????? ?????? ?????? ?????? ??????
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
            ??????????????????!
          </button>
        ) : isMyPost ? (
          /**
           * TODO: ?????? ????????? ?????? ?????? ????????? ?????? ?????? ??????
           */

          <button
            onClick={() => router.push(`/meet/${detailData?.id}/candidate`)}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            ????????? ????????????
          </button>
        ) : !isCompleted && !detailData?.applied ? (
          <button
            onClick={() => {
              if (hasProfile && detailData?.recruitType === profile?.type) {
                handleBottomToggle()

                if (id === null) {
                  setShowLoginModal(true)
                  return
                }

                if (!hasProfile) {
                  setShowProfileModal(true)
                  return
                }
              }
            }}
            className={`fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px]
              text-subtitle font-bold  ${
                detailData?.recruitType !== profile?.type
                  ? 'bg-gray-600 text-gray-100'
                  : 'bg-green-light text-gray-900'
              }`}
            disabled={hasProfile && detailData?.recruitType !== profile?.type}
          >
            {hasProfile && detailData?.recruitType !== profile?.type
              ? `${detailData?.recruitType}??? ?????? ????????????`
              : '????????????'}
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation()
              handleCancelModalToggle()
              requestCancelCandidate(meetId, getAccessToken())
            }}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            ?????? ????????????
          </button>
        )}
        <ModalWithSingleButton
          showModal={showprofileModal}
          setShowModal={setShowProfileModal}
          handleOnClick={() => router.push(`/profile/${id}/edit`)}
          submitMessage={'????????? ????????????'}
          hasCloseButton={true}
        >
          <ProfileRegisterContent />
        </ModalWithSingleButton>
      </div>
      <ModalWithSingleButton
        showModal={showprofileModal}
        setShowModal={setShowProfileModal}
        handleOnClick={() => router.push(`/profile/${id}/edit`)}
        submitMessage={'????????? ????????????'}
        hasCloseButton={true}
      >
        <ProfileRegisterContent />
      </ModalWithSingleButton>

      <ConfirmModal
        showModal={showLoginModal}
        setShowModal={setShowLoginModal}
        handleOnSubmit={() => router.push('/signin')}
        modalContent={'????????? ??? ????????? ???????????????.'}
        submitMessage={'????????? ??????'}
      />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  req,
  res,
}: GetServerSidePropsContext) => {
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
