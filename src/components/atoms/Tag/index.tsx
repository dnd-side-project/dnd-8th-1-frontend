import { Center, Text } from '@chakra-ui/react'
import { Icon } from '@components'
import { theme } from '@constants'

type tagType = 'region' | 'meet' | 'genre'

interface TagInterface {
  type: tagType // 지역 태그의 경우 아이콘 넣게하기
  content: string
  isHighlighted?: boolean
  styleClass?: string
  iconColor?: string // 색상 코드
}

const { colors } = theme

const Tag = ({
  type,
  content,
  isHighlighted,
  styleClass,
  iconColor,
}: TagInterface) => {
  const isRegion = type === 'region'
  return (
    // TODO: 패딩 부분 스타일 통일 요청
    <Center
      className={`${
        isRegion ? 'w-[67px]' : 'w-[45px]'
      } inline-block h-[24px] rounded-[4px] bg-gray-700 px-[12px] py-[4px] text-center text-caption ${
        isHighlighted ? 'text-green-light' : 'text-gray-300'
      }  ${styleClass}`}
    >
      <Center className="w-full">
        {isRegion && (
          <Icon
            size={12}
            icon="pin-location-inactive"
            color={
              iconColor
                ? iconColor
                : isHighlighted
                ? colors.green.light
                : colors.gray[300]
            }
          />
        )}
        <Text className={`${isRegion ? 'ml-[7.85px]' : 'ml-0'}`}>
          {content}
        </Text>
      </Center>
    </Center>
  )
}

export default Tag
