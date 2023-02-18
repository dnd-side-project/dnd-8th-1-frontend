import { Center } from '@chakra-ui/react'
import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'

interface CandidateModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  title: string
  profileId: string
}

const CandidateModal = ({
  showModal,
  setShowModal,
  title,
}: CandidateModalProps) => {
  return (
    <Modal
      hasCloseButton={true}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="relative h-[144px] w-[290px] bg-gray-700">
        <Center
          flexDirection="column"
          className="absolute top-[12px] left-[54px]"
        >
          <div className="flex w-[130px] items-center">
            <span className="block w-[130px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-body1 font-[600] text-gray-100">
              {`'${title}`}
            </span>
            <span className="block w-[130px] overflow-hidden text-ellipsis whitespace-nowrap text-center text-body1 font-[600] text-gray-100">
              {"' 모임에"}
            </span>
          </div>
          <div>
            <p className="h-[30px] w-[180px] text-center text-body1 font-[600] text-gray-100">{`신청이 취소되었습니다!`}</p>
          </div>
        </Center>
        <button
          className="absolute bottom-0 h-[50px] w-[290px] rounded-b-[12px] bg-green-light text-body1 font-bold text-gray-900"
          onClick={() => {
            setShowModal(false)
          }}
        >
          확인
        </button>
      </div>
    </Modal>
  )
}

export default CandidateModal
