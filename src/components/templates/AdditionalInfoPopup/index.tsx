import { FormTitleHeader, Spacer } from '@components'
import { Dispatch, ReactNode, SetStateAction } from 'react'

interface AdditionalInfoPopupProps {
  isOpenChat?: boolean // 오픈 채팅 팝업 여부
  headerTitle: string // 헤더 제목
  title: string // 팝업 제목
  subTitle: string // 팝업 부제목
  children: ReactNode // 팝업에 들어갈 자식 컴포넌트
  setPopupOpen: Dispatch<SetStateAction<boolean>> // 팝업 여는 상태
}

const AdditionalInfoPopup = ({
  isOpenChat,
  headerTitle,
  title,
  subTitle,
  children,
  setPopupOpen,
}: AdditionalInfoPopupProps) => {
  return (
    <section className="fixed top-0 z-[9999] h-screen w-[375px]">
      <FormTitleHeader setShowPopup={setPopupOpen} title={headerTitle} />
      <Spacer size={38} />
      <div className="px-[16px]">
        <h1 className="text-title2 font-bold text-gray-100">{title}</h1>
        <div className="mt-[13px] text-body1 text-gray-400">
          {isOpenChat ? (
            <>
              <span>{subTitle.slice(0, 28)}</span> <br />{' '}
              <span>{subTitle.slice(28)}</span>
            </>
          ) : (
            <>
              <span>{subTitle.slice(0, 20)}</span> <br />{' '}
              <span>{subTitle.slice(20)}</span>
            </>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}

export default AdditionalInfoPopup
