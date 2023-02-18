import {
  Avatar,
  IconButton,
  MeetDeleteModal,
  MeetDetailCard,
  MeetDetailImage,
  StatusPopupContent,
  Tags,
  CandidateBottomSheet,
  CandidateCancelModal,
} from '@components'
import { useDisclosure } from '@hooks'
import { GenreTypes, RegionTypes } from '@types'
import { isDeadLine } from '@utils'
import CandidateModal from 'components/organisms/CandidateModal'
import { MEET_DETAIL } from 'dummy'
import { useRouter } from 'next/router'
import { useState } from 'react'

const MeetDetailPage = () => {
  const {
    id,
    title,
    location,
    type,
    imgUrl,
    recruitCount,
    recruitType,
    description,
    deadline,
    profile,
  } = MEET_DETAIL
  const { id: profileId, imgUrl: profileImgUrl, name } = profile
  const router = useRouter()
  const [isStatusBarOpen, setIsStatusBarOpen] = useState(false)
  const [showDeleteModal, setDeleteShowModal, handleDeleteModalToggle] =
    useDisclosure()
  const [
    showCandidateModal,
    setShowCandidateModal,
    handleCandidateModalToggle,
  ] = useDisclosure()
  const [showBottomSheet, setShowBottomSheet, handleBottomToggle] =
    useDisclosure()
  const [showCancelModal, setShowCancelModal, handleCancelModalToggle] =
    useDisclosure()
  /**
   *TODO: 임시 유저 데이터
   */
  const [isUser, setIsUser] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  return (
    <>
      {showDeleteModal && (
        <MeetDeleteModal
          showModal={showDeleteModal}
          setShowModal={setDeleteShowModal}
        />
      )}
      {showCandidateModal && (
        <CandidateModal
          showModal={showCandidateModal}
          setShowModal={setShowCandidateModal}
          title={title}
          profileId={profileId}
        />
      )}
      {showCancelModal && (
        <CandidateCancelModal
          showModal={showCancelModal}
          setShowModal={setShowCancelModal}
          title={title}
        />
      )}
      <CandidateBottomSheet
        handleOnClickSubmit={() => {
          handleCandidateModalToggle()
          setIsCompleted(true)
        }}
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
        /**
         * TODO : 변경 되어야 할 부분(유저 데이터로 채워야 함)
         */
        openchatUrl="https://open.kakao.com/o/g2g5b5b9"
      />
      <header className="w-full">
        <MeetDetailImage imgUrl={imgUrl} deadline={deadline} />
      </header>
      <main className="relative z-[0] mt-[-10px] w-[375px] rounded-t-[10px] bg-gray-900 px-[16px] py-[18px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar
              profileImage={profileImgUrl}
              shape="circle"
              size={30}
              styleClass="border border-gray-700"
            />
            <span className="ml-[10px] text-body2 font-bold text-gray-300">
              {name}
            </span>
          </div>
          {/**
           * TODO: 유저 데이터 받을 경우 새로운 분기 처리 필요
           */}
          {!isUser && (
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
                router.push(`/meet/edit/${id}`)
              }}
              handleOnDelete={handleDeleteModalToggle}
            />
          </div>
        )}
        <p className="mt-[26px] mb-[24px] text-headline font-bold text-gray-100">
          {title}
        </p>
        <div className="mb-[26px]">
          <Tags
            tagStyle="bg-gray-700"
            textStyle="text-gray-300"
            tags={[location as RegionTypes, type as GenreTypes]}
          />
        </div>
        <MeetDetailCard
          location={location}
          deadline={deadline}
          recruitType={recruitType as '개인' | '팀'}
          recruitCount={recruitCount}
        />
        <p className="whitespace-pre-wrap break-words">{description}</p>
      </main>
      <div className="fixed bottom-[17px] mx-[auto] h-[102px] w-[375px] bg-darken_gradient">
        {isDeadLine(deadline) ? (
          <button
            disabled
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-gray-600 text-subtitle font-bold text-gray-400"
          >
            마감되었어요!
          </button>
        ) : !isUser ? (
          /**
           * TODO: 유저 데이터 받을 경우 새롭게 분기 처리 필요
           */
          <button
            onClick={() => router.push(`/meet/${id}/candidate`)}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            신청자 확인하기
          </button>
        ) : !isCompleted ? (
          <button
            onClick={handleBottomToggle}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            신청하기
          </button>
        ) : (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsCompleted(false)
              handleCancelModalToggle()
            }}
            className="fixed bottom-[17px] mx-[auto] ml-[16px] h-[50px] w-[343px] rounded-[8px] bg-green-light text-subtitle font-bold text-gray-900"
          >
            신청 취소하기
          </button>
        )}
      </div>
    </>
  )
}

export default MeetDetailPage
