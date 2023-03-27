import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'

interface ConfirmModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  handleOnSubmit: () => void
  modalContent: string
  submitMessage: string
  hasCloseButton?: boolean
}

const ConfirmModal = ({
  showModal,
  setShowModal,
  handleOnSubmit,
  modalContent,
  submitMessage,
  hasCloseButton = false,
}: ConfirmModalProps) => {
  return (
    <Modal
      hasCloseButton={hasCloseButton}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <>
        <div className="relative flex h-[180px] w-[290px] flex-col items-center justify-center bg-gray-700">
          <span
            className={`absolute ${
              hasCloseButton ? 'top-[45px]' : 'top-[58px]'
            } w-[fit] text-body1 font-bold text-gray-100`}
          >
            {modalContent}
          </span>
          <div className="absolute bottom-0">
            <button
              className="h-[50px] w-[290px] bg-green-light text-body1 font-bold text-gray-900"
              onClick={handleOnSubmit}
            >
              {submitMessage}
            </button>
          </div>
        </div>
      </>
    </Modal>
  )
}

export default ConfirmModal
