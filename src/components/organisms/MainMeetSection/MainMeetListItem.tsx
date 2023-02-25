import { GenreTypes, Meet, RegionTypes } from '@types'
import { Avatar, Tags } from '@components'
import Link from 'next/link'

interface MainMeetListItemProps {
  meetItem: Omit<Meet, 'deadline'>
}

const MainMeetListItem = ({
  meetItem: {
    id,
    imgUrl,
    title,
    type,
    location,
    profile: { name, imgUrl: profileImgUrl },
  },
}: MainMeetListItemProps) => {
  return (
    <Link
      className="flex w-[146px] flex-col justify-center pr-[16px] last:pr-0"
      key={id}
      href={`/meet/${id}`}
    >
      <Avatar shape="round" profileImage={imgUrl} size={130} />
      <Tags
        containerStyle="mt-[12px] mb-[8px] w-[146px]"
        textStyle="text-caption text-gray-400"
        tags={[location, type] as (GenreTypes | RegionTypes)[]}
      />
      <span className="mb-[8px] block w-full overflow-hidden text-ellipsis whitespace-nowrap text-body1 font-bold">
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

export default MainMeetListItem
