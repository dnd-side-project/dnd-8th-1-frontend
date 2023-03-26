import { GenreTypes, Performance, RegionTypes } from '@types'
import { Avatar, StyledImage, Tags } from '@components'
import Link from 'next/link'

interface MainMeetListItemProps {
  performanceItem: Omit<Performance, 'startDate'>
}

const MainPerformanceListItem = ({
  performanceItem: {
    id,
    imgUrl,
    location,
    genres,
    title,
    profile: { name, imgUrl: profileImgUrl },
  },
}: MainMeetListItemProps) => {
  return (
    <Link
      className="flex w-[255px] flex-col justify-center pr-[16px] last:pr-0"
      key={id}
      href={`/performance/${id}`}
    >
      <StyledImage
        src={imgUrl}
        alt="공연 이미지"
        width={239}
        height={130}
        styleClass="relative overflow-hidden rounded-[8px] border border-gray-700"
      />

      <Tags
        containerStyle="mt-[12px] mb-[8px]"
        textStyle="text-caption text-gray-400"
        tags={[location, genres[0]] as (GenreTypes | RegionTypes)[]}
      />
      <span className="mb-[8px] block w-[95%] overflow-hidden text-ellipsis whitespace-nowrap text-body1 font-bold">
        {title}
      </span>
      <div className="flex items-center">
        <Avatar
          profileImage={profileImgUrl}
          size={24}
          styleClass="border-solid border-[0.5px] border-gray-700"
        />
        <span className="ml-[8px] overflow-hidden text-ellipsis whitespace-nowrap text-body2 text-gray-100">
          {name}
        </span>
      </div>
    </Link>
  )
}

export default MainPerformanceListItem
