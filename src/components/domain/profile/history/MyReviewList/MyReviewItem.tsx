import { MyReview } from '@types'
import dayjs from 'dayjs'
import Link from 'next/link'

interface MyReviewItemProps {
  myReview: MyReview
}

const MyReviewItem = ({ myReview }: MyReviewItemProps) => {
  const { createdAt, review, performance } = myReview
  const date = dayjs(createdAt)

  return (
    <li>
      <Link href={`/performance/${performance.id}`}>
        <div className="px-[16px] pt-[15px] pb-[12px]">
          <div className="mb-[5px] flex justify-between">
            <div className="text-body2 text-[#9D9D9D] ">
              {performance.title}
            </div>
            <div className="text-caption text-[#9D9D9D] ">
              {date.format('M월 D일')}
            </div>
          </div>
          <p className="text-body2  text-gray-100 line-clamp-3">{review}</p>
        </div>
      </Link>
      <div className="h-[1px] w-[375px] bg-gray-700" />
    </li>
  )
}

export default MyReviewItem
