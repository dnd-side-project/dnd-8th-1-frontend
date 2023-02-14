import { Center, Tag, Text } from '@chakra-ui/react'
import { StyledImage } from '@components'
import { calculateDday, isDeadLine } from '@utils'

interface ImageWithDeadeLineProps {
  deadLine: string
  imgUrl: string
}

const ImageWithDeadLine = ({ deadLine, imgUrl }: ImageWithDeadeLineProps) => {
  const isDead = isDeadLine(deadLine)
  const dday = calculateDday(deadLine)
  const showDday = dday <= 7

  return (
    <div className="relative h-[110px] w-[96px] overflow-hidden rounded-[6px]">
      {isDead && (
        <Center className="absolute h-[100%] w-[100%] bg-gray-700 bg-opacity-60 text-gray-100">
          <Text className="s z-10 text-[12px] text-gray-100">마감</Text>
        </Center>
      )}

      {showDday && !isDead && (
        <span className="absolute top-[6px] left-[4px] box-border h-[24px] w-[50px] break-keep rounded-[20px] bg-gray-700 px-[14px] py-[6px]  text-center text-[12px] font-[700] text-gray-300">
          {`D-${dday}`}
        </span>
      )}

      <StyledImage src={imgUrl} width={96} height={110} alt="공연 이미지" />
    </div>
  )
}

export default ImageWithDeadLine
