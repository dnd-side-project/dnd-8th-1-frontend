import { MainComment } from '@types'
import { MainPerformanceCommentListItem } from './MainPerformanceCommentListItem'

interface MainPerformanceCommentListProps {
  commentList: MainComment[]
}

const MainPerformanceCommentList = ({
  commentList,
}: MainPerformanceCommentListProps) => {
  return (
    <section className="no-scrollbar mt-[21px] flex h-[149px] w-[335px] items-end gap-x-[16px] overflow-hidden overflow-x-scroll">
      {commentList.map((commentListItem) => (
        <MainPerformanceCommentListItem
          key={commentListItem.reviewId}
          commentItem={commentListItem}
        />
      ))}
    </section>
  )
}

export default MainPerformanceCommentList
