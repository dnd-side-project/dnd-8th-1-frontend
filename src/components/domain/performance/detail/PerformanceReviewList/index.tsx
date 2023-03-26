import { Comment } from '@types'
import { Center } from '@chakra-ui/react'
import PerformanceReviewItem from './PerformanceReviewItem'

interface PerformanceReviewListProps {
  reviews: Comment[]
  handleOnDelete: (reviewId: number) => void
}

const PerformanceReviewList = ({
  reviews,
  handleOnDelete,
}: PerformanceReviewListProps) => {
  console.log(reviews)
  return (
    <ul>
      {reviews.length ? (
        reviews.map((review) => (
          <PerformanceReviewItem
            key={review.reviewId}
            reviewItem={review}
            handleOnDelete={(reviewId) => {
              handleOnDelete(reviewId)
            }}
          />
        ))
      ) : (
        <Center className="mb-[250px]">
          <p className="text-body1 text-gray-400 ">작성된 후기가 없어요</p>
        </Center>
      )}
    </ul>
  )
}

export default PerformanceReviewList
