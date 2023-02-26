import { Modal, Checkbox } from '@components'
import { Dispatch, SetStateAction, useState } from 'react'
import {
  MODAL_BUTTON_STYLE_SM,
  MODAL_BUTTON_ACTIVE_SM,
  MODAL_BUTTON_DISABLED_SM,
} from '@constants'

interface CheckboxModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
  handleOnSubmit: () => void
  modalContent: string // 모달 내용
  submitMessage: string
  checkBoxDescription: string // 체크 박스에 대한 설명
}

const CheckboxModal = ({
  showModal,
  setShowModal,
  handleOnSubmit,
  modalContent,
  submitMessage,
  checkBoxDescription,
}: CheckboxModalProps) => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Modal
      hasCloseButton={false}
      showModal={showModal}
      setShowModal={setShowModal}
    >
      <div
        className={`relative flex h-[206px] w-[290px] flex-col items-center justify-center bg-gray-700`}
      >
        <span
          className={`absolute top-[46px] w-[fit] text-subtitle font-bold  text-gray-100`}
        >
          {modalContent}
        </span>

        <div className="flex items-center gap-[6.83px]">
          <Checkbox setIsChecked={setIsChecked} isChecked={isChecked} />
          <span className="text-body2 text-gray-300">
            {checkBoxDescription}
          </span>
        </div>

        <div className="absolute bottom-0">
          <button
            onClick={() => {
              setShowModal(false)
              setIsChecked(false)
            }}
            className={`${MODAL_BUTTON_STYLE_SM} bg-gray-600 text-gray-100`}
          >
            취소
          </button>
          <button
            className={
              isChecked
                ? MODAL_BUTTON_ACTIVE_SM
                : `${MODAL_BUTTON_DISABLED_SM} cursor-not-allowed`
            }
            onClick={() => {
              handleOnSubmit()
              setIsChecked(false)
            }}
            disabled={!isChecked}
          >
            {submitMessage}
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CheckboxModal
