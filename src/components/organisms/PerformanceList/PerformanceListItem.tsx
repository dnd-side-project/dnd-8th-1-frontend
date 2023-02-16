import { Avatar, StyledImage, Tags } from '@components'
import { theme } from '@constants'
import { Performance } from '@types'
import Link from 'next/link'

interface PerformanceListItemProps {
  performance: Performance
}

const PerformanceListItem = ({
  performance: {
    performId,
    performImg,
    performTitle,
    performStartDate,
    performLocation,
    performGenres,
    profile: { imgUrl, name },
  },
}: PerformanceListItemProps) => {
  return (
    <Link
      className="mb-[18px] flex h-[110px] w-[343px] items-center bg-gray-900 last:mb-0"
      href={`/performance/${performId}`}
    >
      <StyledImage
        width={96}
        height={110}
        alt="performance image"
        src={performImg}
        placeholder="blur"
        styleClass="overflow-hidden rounded-[4px] w-[96px] h-[110px] relative"
      />
      <div className="ml-[12px] flex h-[120px] w-[247px] flex-col justify-center">
        <h3 className="h-[30px] w-[247px] overflow-hidden text-ellipsis whitespace-nowrap text-subtitle font-bold text-gray-100">
          {performTitle}
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
        <span className="mb-2 text-body2 text-gray-400">
          {performStartDate}
        </span>
        <Tags
          containerStyle="mb-1"
          textStyle="text-gray-400"
          tags={[performLocation, ...performGenres]}
        />
      </div>
    </Link>
  )
}

export default PerformanceListItem
