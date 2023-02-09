import { Box, Center, Tag, Text } from '@chakra-ui/react'
import { GenreTypes, RegionTypes } from '@types'
import { Icon } from '@components'

type TagTypes = GenreTypes | RegionTypes

interface TagsProps {
  iconType?: string
  tags: TagTypes[]
  containerStyle?: string
  tagStyle?: string
  textStyle?: string
}

const isRegion = (tag: TagTypes) => {
  /**
   * TODO : 다른 이슈에서 전역 상수로 선언해놓은게 있어서 임시로 선언했습니다!
   * 만약 그 이슈가 머지가 되면 수정될 예정 입니다.
   */
  const REGION = [
    '서울',
    '경기',
    '인천',
    '강원',
    '충북',
    '충남',
    '세종',
    '대전',
    '광주',
    '전북',
    '경북',
    '대구',
    '제주',
    '전남',
    '경남',
    '부산',
    '울산',
  ]
  return REGION.includes(tag)
}

const Tags = ({
  /**
   * TODO : iconType은 Icon 컴포넌트에 지금 Icon이 없어 어떤 값을 넣을 수가 없기에 임시로 두었습니다.
   * 또한 지금 Icon에 대한 타입이 없어 string으로 지정되었는데 추후 타입도 수정 될 예정입니다.
   */
  iconType,
  tags,
  containerStyle,
  tagStyle,
  textStyle,
}: TagsProps) => {
  const isTag = (tag: TagTypes) => {
    return tags[tags.length - 1] === tag
  }
  return (
    <Box className={containerStyle}>
      {tags.map((tag) => (
        <>
          {isRegion(tag) ? (
            <Tag
              key={tag}
              className={`${isTag(tag) ? 'mr-[0px]' : 'mr-[4px]'} ${tagStyle}`}
            >
              <Center className="w-full">
                <Icon icon="vercel" size={16} />
                <Text className={`ml-2 ${textStyle}`}>{tag}</Text>
              </Center>
            </Tag>
          ) : (
            <Tag
              key={tag}
              className={`${isTag(tag) ? 'mr-[0px]' : 'mr-[4px]'} ${tagStyle}`}
            >
              <Center className="w-full">
                <Text className={textStyle}>{tag}</Text>
              </Center>
            </Tag>
          )}
        </>
      ))}
    </Box>
  )
}

export default Tags
