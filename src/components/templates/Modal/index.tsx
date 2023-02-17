import { IconButton } from '@components'
import { theme } from '@constants'
import { useClickAway, useDelayUnmount } from '@hooks'
import {
  Dispatch,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
  useRef,
} from 'react'

interface ModalProps {
  children: ReactElement // Modal 안쪽에 들어갈 content
  hasCloseButton: boolean // x 버튼 유무
  showModal: boolean // 커스텀 훅과 함께 사용
  setShowModal: Dispatch<SetStateAction<boolean>> // 커스텀 훅과 함께 사용
}

const Modal = ({
  children,
  hasCloseButton = false,
  showModal,
  setShowModal,
}: ModalProps) => {
  const shouldRenderModal = useDelayUnmount(showModal, 200)
  const ModalRef = useRef(null)

  useClickAway(ModalRef, () => {
    setShowModal(false)
  })

  const portalDivFragment = useMemo(() => {
    return document.createElement('div')
  }, [])
  useEffect(() => {
    document.querySelector('#layout')?.appendChild(portalDivFragment)
    return () => {
      document.querySelector('#layout')?.removeChild(portalDivFragment)
    }
  })
  return (
    <>
      {shouldRenderModal && (
        <div
          className={`absolute top-0 h-[100%] w-[100%] ${
            showModal ? 'animate-fadeIn' : 'animate-fadeOut'
          } flex items-center justify-items-center
          overflow-hidden bg-gray-900  bg-opacity-60
          `}
        >
          <div
            className={`fixed top-[250px] left-0 right-0 z-[999] ml-auto mr-auto w-fit overflow-hidden rounded-[12px] bg-gray-700`}
            ref={ModalRef}
          >
            {hasCloseButton && (
              <div
                onClick={() => setShowModal(false)}
                className="mt-[14px] mr-[14px] flex items-center justify-end"
              >
                <IconButton
                  icon="x-active"
                  color={theme.colors.gray[400]}
                  size={24}
                  areaLabel="모달 닫기 버튼"
                />
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
