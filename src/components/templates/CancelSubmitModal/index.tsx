import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'

interface CancelSubmitModaleModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  handleOnSubmit: () => void
  modalContent: string
  submitMessage: string
}

const CancelSubmitModal = ({
  showModal,
  setShowModal,
  handleOnSubmit,
  modalContent,
  submitMessage,
}: CancelSubmitModaleModalProps) => {
  return (
    <Modal
      hasCloseButton={false}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="relative flex h-[180px] w-[290px] flex-col items-center justify-center bg-gray-700">
        <span className="absolute top-[49px] w-[fit] text-subtitle font-bold text-gray-100">
          {modalContent}
        </span>
        <div className="absolute bottom-0">
          <button
            onClick={() => setShowModal(false)}
            className="h-[50px] w-[145px] bg-gray-500 text-body1 font-bold"
          >
            취소
          </button>
          <button
            className="h-[50px] w-[145px] bg-green-light text-body1 font-bold text-gray-900"
            onClick={handleOnSubmit}
          >
            {submitMessage}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CancelSubmitModal
