import { MainComment } from '@types'
import { StyledImage } from '@components'
import Link from 'next/link'

interface MainPerformanceCommentListItemProps {
  commentItem: MainComment
}

export const MainPerformanceCommentListItem = ({
  commentItem: {
    content,
    performance: { id, imgUrl, title },
    writer: { name },
  },
}: MainPerformanceCommentListItemProps) => {
  return (
    <Link
      href={`/performance/${id}`}
      className="relative flex h-[132px] w-full items-center rounded-[10px] bg-gray-700 pr-[16px]"
    >
      <StyledImage
        styleClass="absolute top-[-10px] left-[16px] rounded-[4px] w-[94px] h-[131px]"
        width={94}
        height={131}
        alt="공연 이미지"
        src={imgUrl}
        placeholder="blur"
      />
      <div className="ml-[126px] w-[194px]">
        <div className="mb-[6px] w-full border-b border-gray-600 pb-[6px]">
          <span className="text-body1 font-bold text-gray-100">{title}</span>
        </div>
        <div>
          <span className="mb-[8px] block text-caption font-bold text-gray-300">
            {name}
          </span>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-body2 text-gray-400">
            {content.slice(0, 20)} <br /> {content.slice(20)}
          </p>
        </div>
      </div>
    </Link>
  )
}
