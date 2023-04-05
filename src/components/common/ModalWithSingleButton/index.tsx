import { Modal, Spacer } from '@components'
import { MODAL_BUTTON_ACTIVE_LG } from '@constants'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface ModalWithSingleButtonProps {
  // 훅과 함께 사용하기 위한 props
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  // 내부 content
  children: ReactNode
  handleOnClick: () => void
  submitMessage: string
  hasCloseButton?: boolean
}

const ModalWithSingleButton = ({
  showModal,
  setShowModal,
  handleOnClick,
  children,
  submitMessage,
  hasCloseButton = false,
}: ModalWithSingleButtonProps) => {
  return (
    <Modal
      hasCloseButton={hasCloseButton}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div className="relative flex w-[336px] flex-col items-center justify-between bg-gray-700">
        {children}
        <Spacer size={52} />
        <div>
          <button
            className={`${MODAL_BUTTON_ACTIVE_LG} w-[336px]`}
            onClick={handleOnClick}
          >
            {submitMessage}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalWithSingleButton
