import { Box, Flex, Text } from '@chakra-ui/react'
import { Avatar, Tag, ImageWithDeadLine } from '@components'
import Link from 'next/link'
import { Meet } from '@types'

const CollaboListItem = ({ collaboListItem }: { collaboListItem: Meet }) => {
  const { id, title, location, type, imgUrl, deadline, profile } =
    collaboListItem

  return (
    <Link href={`meet/${id}`} className="cursor-pointer">
      <li className="mb-[18px] h-[110px] w-[343px] bg-gray-900">
        <Flex>
          <ImageWithDeadLine
            deadLine={deadline}
            imgUrl={imgUrl}
            styleClass="border-solid border-[0.5px] border-gray-700"
          />
          <Flex direction="column">
            <div className="mb-[12px] ml-[7px] flex h-[24px] w-[100%] gap-[8px]">
              <Tag type="region" content={location} />
              <Tag
                type="meet"
                content={type}
                width={55}
                wrapperStyle={{
                  paddingLeft: '12px',
                  paddingRight: '12px',
                }}
              />
            </div>
            <Box className="ml-[12px]">
              <h3 className="mb-[12px] h-[20px] w-[235px] overflow-hidden text-ellipsis whitespace-nowrap text-subtitle  font-bold leading-none text-gray-100">
                {title}
              </h3>
              <Flex className="mb-[18px]">
                <Avatar
                  profileImage={profile.imgUrl}
                  size={24}
                  styleClass="border-solid border-[0.5px] border-gray-700"
                />
                <Text className="ml-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-body2 text-gray-100">
                  {profile.name}
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Flex>
      </li>
    </Link>
  )
}

export default CollaboListItem
