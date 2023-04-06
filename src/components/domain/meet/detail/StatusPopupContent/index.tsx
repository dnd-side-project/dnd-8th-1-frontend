import { Center } from '@chakra-ui/react'

interface StatusPopupContentProps {
  handleOnModify: () => void
  handleOnDelete: () => void
}

const StatusPopupContent = ({
  handleOnModify,
  handleOnDelete,
}: StatusPopupContentProps) => {
  const buttonStyleClass = 'h-[16.5px] text-body2 text-gray-300'
  return (
    <Center flexDirection="column">
      <button className={buttonStyleClass} onClick={handleOnModify}>
        수정하기
      </button>
      <div className="my-[12px] h-[1px] w-[78px] bg-gray-600" />
      <button className={buttonStyleClass} onClick={handleOnDelete}>
        삭제하기
      </button>
    </Center>
  )
}

export default StatusPopupContent
