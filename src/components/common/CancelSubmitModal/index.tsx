import { Modal } from '@components'
import { Dispatch, SetStateAction } from 'react'

interface CancelSubmitModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  handleOnSubmit: () => void
  modalContent: string
  submitMessage: string
  modalDescription?: string
}

const CancelSubmitModal = ({
  showModal,
  setShowModal,
  handleOnSubmit,
  modalContent,
  submitMessage,
  modalDescription,
}: CancelSubmitModalProps) => {
  return (
    <Modal
      hasCloseButton={false}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div
        className={`relative flex  w-[290px] flex-col items-center justify-center bg-gray-700 ${
          modalDescription ? 'h-[210px]' : 'h-[180px]'
        }`}
      >
        <span
          className={`absolute  w-[fit] text-subtitle font-bold text-gray-100 ${
            modalDescription ? 'top-[54px]' : 'top-[49px]'
          }`}
        >
          {modalContent}
        </span>
        {modalDescription && (
          <span className="absolute top-[86px] text-body2 text-gray-400 ">
            {modalDescription}
          </span>
        )}
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
