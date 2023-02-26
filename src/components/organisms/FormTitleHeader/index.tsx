import { IconButton } from '@components'
import { Dispatch, SetStateAction } from 'react'

interface FormTitleHeaderProps {
  title: string // formHeader에 들어가는 title
  setShowPopup: Dispatch<SetStateAction<boolean>> // 팝업 닫을 상태
}

const FormTitleHeader = ({ title, setShowPopup }: FormTitleHeaderProps) => {
  return (
    <div
      className={`top-0 z-[999] flex ${
        title ? 'justify-start' : 'justify-end'
      }  bg-gray-900 px-[16px] py-[12px]`}
    >
      <h2 className="ml-[24px] block w-full text-center text-body1 font-bold text-gray-100">
        {title}
      </h2>
      <IconButton
        icon="x-inactive"
        size={title ? 20 : 24}
        areaLabel="팝업 닫기 버튼"
        handleOnClick={() => setShowPopup(false)}
      />
    </div>
  )
}

export default FormTitleHeader
