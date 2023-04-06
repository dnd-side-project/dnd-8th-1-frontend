import { Box, Center, Tag, Text } from '@chakra-ui/react'
import { GenreTypes, RegionTypes } from '@types'
import { Icon } from '@components'
import { REGIONS, theme } from '@constants'

type TagTypes = GenreTypes | RegionTypes

interface TagsProps {
  tags: TagTypes[]
  containerStyle?: string
  tagStyle?: string
  textStyle?: string
}

const isRegion = (tag: TagTypes) => {
  return (REGIONS as unknown as RegionTypes).includes(tag)
}

const Tags = ({ tags, containerStyle, tagStyle, textStyle }: TagsProps) => {
  const isLastTag = (tag: TagTypes) => {
    return tags[tags.length - 1] === tag
  }
  return (
    <Box className={containerStyle}>
      {tags.map((tag) => (
        <Tag
          borderRadius={'4px'}
          bgColor={theme.colors.gray[700]}
          paddingX={'12px'}
          paddingY={'4px'}
          key={tag}
          className={`${isLastTag(tag) ? 'mr-0' : 'mr-2'} ${tagStyle}`}
        >
          <Center className="w-full">
            {isRegion(tag) && <Icon size={16} icon="pin-location-inactive" />}
            <Text
              className={`${
                isRegion(tag) ? 'ml-[7.85px]' : 'ml-0'
              } ${textStyle}`}
            >
              {tag}
            </Text>
          </Center>
        </Tag>
      ))}
    </Box>
  )
}

export default Tags
