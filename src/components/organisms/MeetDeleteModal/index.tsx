import { Modal } from '@components'
import { useDeleteMeet } from '@queries'
import { Dispatch, SetStateAction } from 'react'

interface MeetDeleteModalProps {
  id: number
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

// TODO: 템플릿화 된 부분으로 리팩터링
const MeetDeleteModal = ({
  id,
  showModal,
  setShowModal,
}: MeetDeleteModalProps) => {
  const { mutate: requestDeleteMeet } = useDeleteMeet()
  return (
    <Modal
      hasCloseButton={false}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="relative flex h-[180px] w-[290px] flex-col items-center justify-center bg-gray-700">
        <span className="absolute top-[49px] w-[fit] text-subtitle font-bold text-gray-100">
          게시물을 삭제하시겠어요?
        </span>
        <div className="absolute bottom-0">
          <button
            onClick={() => setShowModal(false)}
            className="h-[50px] w-[145px] bg-gray-500 text-body1 font-bold"
          >
            취소
          </button>
          <button
            onClick={() => requestDeleteMeet(id)}
            className="h-[50px] w-[145px] bg-green-light text-body1 font-bold text-gray-900"
          >
            네, 삭제할게요
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default MeetDeleteModal
