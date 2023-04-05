import { MyReview } from '@types'
import MyReviewItem from './MyReviewItem'
import { ActivityEmptyHelper } from '@components'

interface MyReviewList {
  myReviews: MyReview[]
}

const MyReviewList = ({ myReviews }: MyReviewList) => {
  const isDataEmpty = myReviews && myReviews.length === 0
  return (
    <ul>
      {(myReviews || isDataEmpty) && <ActivityEmptyHelper />}
      {myReviews.length !== 0 &&
        myReviews.map((myReview) => (
          <MyReviewItem key={`review/${myReview.id}`} myReview={myReview} />
        ))}
    </ul>
  )
}

export default MyReviewList
