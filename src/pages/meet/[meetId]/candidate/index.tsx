import { RegisterList } from '@components'
import { useDisclosure } from '@hooks'
import dynamic from 'next/dynamic'
import { MeetApplicant, MeetApplicantsResponse } from '@types'
import { useAcceptCandidate, useCandidate, useMeetDeadline } from '@queries'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

const Modal = dynamic(
  () => import('../../../../components/common/CancelSubmitModal'),
  {
    ssr: false,
  },
)

interface MeetCandidatePageProps {
  eventId: number
}

const MeetCandidatePage = ({ eventId }: MeetCandidatePageProps) => {
  const [showModal, setShowModal, toggle] = useDisclosure()
  const fallback = {} as MeetApplicantsResponse
  const { data = fallback, isLoading } = useCandidate(eventId)
  const candidateData = data?.data as MeetApplicant[]
  const { mutate: requestAcceptCandidate } = useAcceptCandidate()
  const { mutate: requestEarlyDeadline } = useMeetDeadline(eventId)
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
            함께 할 상대를 매칭 해주세요. <br /> 매칭이 완료된 경우 모집을
            마감해주세요.
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
              requestEarlyDeadline({
                eventId,
              })
            }}
            modalContent="모집을 마감하시겠어요?"
            submitMessage="네, 마감할게요"
          />
        </div>
      </div>

      <RegisterList
        registerItems={candidateData}
        handleOnClick={(id) => {
          requestAcceptCandidate({
            eventId,
            memberId: id,
          })
        }}
      />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  return {
    props: {
      eventId: parseInt(params?.meetId as string),
    },
  }
}

export default MeetCandidatePage
