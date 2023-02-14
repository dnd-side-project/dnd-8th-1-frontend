import { Center, Tag, Text } from '@chakra-ui/react'
import { StyledImage } from '@components'
import { calculateDday, isDeadLine } from '@utils'

interface ImageWithDeadeLineProps {
  deadLine: string
  imgUrl: string
  styleClass?: string
}

const ImageWithDeadLine = ({
  deadLine,
  imgUrl,
  styleClass,
}: ImageWithDeadeLineProps) => {
  const isDead = isDeadLine(deadLine)
  const dday = calculateDday(deadLine)
  const showDday = dday <= 7

  return (
    <div
      className={`relative h-[110px] w-[96px] overflow-hidden rounded-[6px] ${styleClass}`}
    >
      {isDead && (
        <Center className="absolute h-[100%] w-[100%] bg-gray-700 bg-opacity-60">
          <Text className="s z-10 text-caption font-bold text-gray-100">
            마감
          </Text>
        </Center>
      )}

      {showDday && !isDead && (
        <span className="absolute left-[4px] top-[6px] inline-block h-[24px] w-[50px] rounded-[20px]  bg-gray-700  py-[6px] text-center text-caption font-bold leading-none text-gray-300">
          <span>{`D-${dday}`}</span>
        </span>
      )}

      <StyledImage src={imgUrl} width={96} height={110} alt="공연 이미지" />
    </div>
  )
}

export default ImageWithDeadLine
