import { IconButton } from '@components'
import { useClickAway, useDelayUnmount } from '@hooks'
import { useRef, ReactElement, Dispatch, SetStateAction } from 'react'
import { theme } from '@constants'

interface BottomSheetProps {
  children: ReactElement // BottomSheet 안쪽에 들어갈 content
  hasCloseButton: boolean // x 버튼 유무
  showBottomSheet: boolean // 커스텀 훅과 함께 사용
  setShowBottomSheet: Dispatch<SetStateAction<boolean>> // 커스텀 훅과 함께 사용
}

const BottomSheet = ({
  children,
  hasCloseButton = false,
  showBottomSheet,
  setShowBottomSheet,
}: BottomSheetProps) => {
  const shouldRenderBottomSheet = useDelayUnmount(showBottomSheet, 200)
  const bottomSheetRef = useRef(null)

  useClickAway(bottomSheetRef, () => {
    setShowBottomSheet(false)
  })

  return (
    <>
      {shouldRenderBottomSheet && (
        <div
          className={`relative h-[100vh] w-[385px] ${
            showBottomSheet ? 'animate-fadeIn' : 'animate-fadeOut'
          } overflow-hidden bg-gray-900 bg-opacity-60`}
        >
          <nav
            className={`absolute bottom-0 z-[999] w-[100%] ${
              showBottomSheet ? 'animate-slideUp' : 'animate-slideDown'
            } rounded-t-[8px] bg-gray-700`}
            ref={bottomSheetRef}
          >
            {hasCloseButton && (
              <div className="mt-[20.3px] mr-[20.18px] flex items-center justify-end">
                <IconButton
                  icon="x-active"
                  color={theme.colors.gray[400]}
                  size={20.18}
                  areaLabel="바텀시트 닫기 버튼"
                  handleOnClick={() => setShowBottomSheet(false)}
                />
              </div>
            )}
            {children}
          </nav>
        </div>
      )}
    </>
  )
}

export default BottomSheet
