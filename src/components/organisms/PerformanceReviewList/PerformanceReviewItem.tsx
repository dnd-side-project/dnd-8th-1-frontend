import { Comment } from '@types'
import dayjs from 'dayjs'

interface PerformanceReviewItemProp {
  reviewItem: Comment
  handleOnDelete: (reviewId: number) => void
}

const PerformanceReviewItem = ({
  reviewItem,
  handleOnDelete,
}: PerformanceReviewItemProp) => {
  const { content, reviewId, createdDate, profile } = reviewItem

  return (
    <li>
      <div className="mb-[42px] px-[16px]">
        <div className="relative mb-[9px] flex gap-[8px]">
          <span className="text-body2 font-bold text-gray-300">
            {profile.name}
          </span>
          <span className="text-body2 text-gray-500 ">
            {dayjs(createdDate).format('· M월 D일')}
          </span>
          {/* TODO: 현재 로그인한 유저의 후기일 경우에만 렌더링 */}
          <button
            className="absolute right-0 text-body2 text-gray-400"
            onClick={() => handleOnDelete(reviewId)}
          >
            삭제
          </button>
        </div>
        <p className="text-body2 text-gray-100">{content}</p>
      </div>
    </li>
  )
}

export default PerformanceReviewItem
