import { Box, Center, Tag, Text } from '@chakra-ui/react'
import { GenreTypes, RegionTypes } from '@types'
import { Icon } from '@components'
import { REGIONS } from '@constants'

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
  const isTag = (tag: TagTypes) => {
    return tags[tags.length - 1] === tag
  }
  return (
    <Box className={containerStyle}>
      {tags.map((tag) => (
        <Tag
          key={tag}
          className={`${isTag(tag) ? 'mr-[0px]' : 'mr-[4px]'} ${tagStyle}`}
        >
          <Center className="w-full">
            {isRegion(tag) && <Icon size={16} icon="pin-location-inactive" />}
            <Text className={`${isRegion(tag) ? 'ml-1' : 'ml-0'} ${textStyle}`}>
              {tag}
            </Text>
          </Center>
        </Tag>
      ))}
    </Box>
  )
}

export default Tags
