import { GenreTypes, RegionTypes } from '@types'

import { Avatar, Icon, Spacer, Tag } from '@components'
import dayjs from 'dayjs'
import { Center } from '@chakra-ui/react'

interface ProfileInfo {
  imgUrl: string
  name: string
  genres: GenreTypes[]
  location: RegionTypes
  career: string // 경력 TODO: 백엔드에서 주는 대로 변수 이름 변경
}

const ProfileInfo = ({
  imgUrl,
  name,
  genres,
  location,
  career,
}: ProfileInfo) => {
  const startDate = dayjs()
  const endDate = dayjs(career)

  const months = startDate.diff(endDate, 'month')

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
          춤과 <span className="font-bold">{months}개월</span> 째 함께하는 중
        </span>
      </div>
    </Center>
  )
}

export default ProfileInfo
