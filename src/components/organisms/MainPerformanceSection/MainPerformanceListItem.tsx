import { GenreTypes, Performance, RegionTypes } from '@types'
import { Avatar, StyledImage, Tags } from '@components'
import Link from 'next/link'

interface MainMeetListItemProps {
  performanceItem: Omit<Performance, 'performStartDate'>
}

const MainPerformanceListItem = ({
  performanceItem: {
    performId,
    performImg,
    performLocation,
    performGenres,
    performTitle,
    profile: { name, imgUrl: profileImgUrl },
  },
}: MainMeetListItemProps) => {
  return (
    <Link
      className="flex w-[255px] flex-col justify-center pr-[16px] last:pr-0"
      key={performId}
      href={`/performance/${performId}`}
    >
      <StyledImage
        styleClass="rounded-[8px] border border-gray-700"
        alt="공연 이미지"
        width={239}
        src={performImg}
        height={130}
        placeholder="blur"
      />
      <Tags
        containerStyle="mt-[12px] mb-[8px]"
        textStyle="text-caption text-gray-400"
        tags={[performLocation, performGenres] as (GenreTypes | RegionTypes)[]}
      />
      <span className="mb-[8px] block w-[95%] overflow-hidden text-ellipsis whitespace-nowrap text-body1 font-bold">
        {performTitle}
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
