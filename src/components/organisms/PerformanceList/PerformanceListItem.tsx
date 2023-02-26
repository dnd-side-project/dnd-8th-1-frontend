import { Avatar, StyledImage, Tags } from '@components'
import { theme } from '@constants'
import { Performance } from '@types'
import Link from 'next/link'

interface PerformanceListItemProps {
  performance: Performance
}

const PerformanceListItem = ({
  performance: {
    id,
    imgUrl,
    title,
    startDate,
    location,
    genres,
    profile: { name },
  },
}: PerformanceListItemProps) => {
  const date = `${startDate?.slice(0, 4)}.${startDate?.slice(
    5,
    7,
  )}.${startDate?.slice(8, 10)}`
  return (
    <Link
      className="mb-[18px] flex h-[110px] w-[343px] items-center bg-gray-900 last:mb-0"
      href={`/performance/${id}`}
    >
      <StyledImage
        width={96}
        height={110}
        alt="performance image"
        src={imgUrl}
        placeholder="blur"
        styleClass="overflow-hidden rounded-[4px] w-[96px] h-[110px] relative"
      />
      <div className="ml-[12px] flex h-[120px] w-[247px] flex-col justify-center">
        <h3 className="h-[30px] w-[247px] overflow-hidden text-ellipsis whitespace-nowrap text-subtitle font-bold text-gray-100">
          {title}
        </h3>
        <div className="mb-1 flex items-center">
          <Avatar
            style={{ border: `1px solid ${theme.colors.gray[600]}` }}
            size={24}
            profileImage={imgUrl}
          />
          <span className="ml-2 w-[220px] overflow-hidden text-ellipsis whitespace-nowrap text-body2 text-gray-400">
            {name}
          </span>
        </div>
        <span className="mb-2 text-body2 text-gray-400">{date}</span>
        <Tags
          containerStyle="mb-1"
          textStyle="text-gray-400"
          tags={[location, ...genres]}
        />
      </div>
    </Link>
  )
}

export default PerformanceListItem
