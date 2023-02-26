import { GenreTypes, RegionTypes } from '@types'

import { Avatar, Icon, Spacer, Tag } from '@components'
import dayjs from 'dayjs'
import { Center } from '@chakra-ui/react'

interface ProfileInfo {
  imgUrl: string
  name: string
  genres: GenreTypes[]
  location: RegionTypes
  startDate: string
}

const ProfileInfo = ({
  imgUrl,
  name,
  genres,
  location,
  startDate,
}: ProfileInfo) => {
  const now = dayjs()
  const endDate = dayjs(startDate)
  const months = now.diff(endDate, 'month')

  return (
    <Center className="flex-col">
      <Avatar profileImage={imgUrl} size={130} />
      <Spacer size={10} />
      <h2 className=" text-title2 font-bold text-gray-100">{name}</h2>
      <Spacer size={14} />
      <div className="flex gap-[8px]">
        <Tag type={'region'} content={location} isHighlighted={true} />
        {genres.map((genre) => (
          <Tag key={genre} type="genre" content={genre} isHighlighted={true} />
        ))}
      </div>
      <Spacer size={15.5} />
      <div className="flex items-center gap-[8.82px]">
        <Icon icon="heart" size={16} />
        <span className="text-subtitle text-gray-100">
          춤과 <span className="font-bold">{months}개월 째</span> 함께하는 중
        </span>
      </div>
    </Center>
  )
}

export default ProfileInfo
