/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from 'next/router'
import { RegisterList } from '@components'
import { useDisclosure } from '@hooks'
import dynamic from 'next/dynamic'
import useCandidate from 'queries/meet/useCandidate'
import { MeetApplicant, MeetApplicantsResponse } from '@types'
import { useAcceptCandidate } from '@queries'
import { GetServerSideProps } from 'next'

const Modal = dynamic(
  () => import('../../../../components/templates/CancelSubmitModal'),
  {
    ssr: false,
  },
)

/**
 *TODO: params 타입 추론 필요
 */
const MeetCandidatePage = ({ params }: any) => {
  const router = useRouter()
  const [showModal, setShowModal, toggle] = useDisclosure()
  console.log(params.meetId)
  const fallback = {} as MeetApplicantsResponse
  const { data = fallback, isLoading } = useCandidate(
    parseInt(params.meetId as string),
  )
  const candidateData = data?.data as MeetApplicant[]
  const { mutate: requestAcceptCandidate } = useAcceptCandidate()
  if (isLoading) {
    return <div></div>
  }
  return (
    <main>
      <div>
        <div className="mb-[8px] px-[20px] pt-[28px]">
          <h1 className="mb-[10px] text-headline font-bold leading-none text-gray-100">
            신청자 확인하기
          </h1>
          <p className="text-body2 text-gray-100">
            신청자와 연락 후 마감버튼을 <br /> 눌러주세요 이런 느낌
          </p>
        </div>

        <div className="mb-[16px] flex justify-end pr-[16px] ">
          <button
            onClick={toggle}
            className="right-[16px] rounded-[100px] border-[1px] border-gray-600 px-[15px] py-[9px] text-body2 font-bold"
          >
            모집 마감하기
          </button>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            handleOnSubmit={() => {
              // TODO: 모집 마감 api 호출
              console.log(params.meetId, '모집 마감')
              router.push(`/meet/${params.meetId}`)
            }}
            modalContent="모집을 마감하시겠어요?"
            submitMessage="네, 마감할게요"
          />
        </div>
      </div>

      <RegisterList
        registerItems={candidateData}
        handleOnClick={(id) => {
          // TODO: API 호출 로직 작성
          requestAcceptCandidate({
            eventId: parseInt(params.meetId as string),
            profileId: id,
          })
        }}
      />
    </main>
  )
}

/**
 *TODO: 추후 리팩토링 필요한 로직
 */
export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  return {
    props: {
      params,
    },
  }
}

export default MeetCandidatePage
