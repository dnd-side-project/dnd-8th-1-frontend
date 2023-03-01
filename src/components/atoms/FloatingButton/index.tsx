import { IconButton } from '@components'

interface FloatingButtonProps {
  handleOnClick: () => void
}

const FloatingButton = ({ handleOnClick }: FloatingButtonProps) => {
  return (
    <IconButton
      styleClass="fixed w-[56px] h-[56px] flex items-center justify-center top-[580px] bg-green-light rounded-full"
      areaLabel="등록 페이지로 이동하는 버튼"
      icon="plus"
      size={18.8}
      handleOnClick={handleOnClick}
    />
  )
}

export default FloatingButton
