import { MyReview } from '@types'
import MyReviewItem from './MyReviewItem'
import { ActivityEmptyHelper } from '@components'

interface MyReviewList {
  myReviews: MyReview[]
}

const MyReviewList = ({ myReviews }: MyReviewList) => {
  return (
    <ul>
      {myReviews.length === 0 && <ActivityEmptyHelper />}
      {myReviews.length !== 0 &&
        myReviews.map((myReview) => (
          <MyReviewItem key={myReview.id} myReview={myReview} />
        ))}
    </ul>
  )
}

export default MyReviewList
