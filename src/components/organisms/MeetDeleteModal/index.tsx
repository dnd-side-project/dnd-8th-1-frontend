import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'

interface MeetDeleteModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const MeetDeleteModal = ({ showModal, setShowModal }: MeetDeleteModalProps) => {
  /**
   * TODO : 삭제 버튼 클릭 시 삭제 api 호출 하기 위한 함수 필요
   */
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
          {/** TODO : onClick handler 추가 */}
          <button className="h-[50px] w-[145px] bg-green-light text-body1 font-bold text-gray-900">
            네, 삭제할게요
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default MeetDeleteModal
