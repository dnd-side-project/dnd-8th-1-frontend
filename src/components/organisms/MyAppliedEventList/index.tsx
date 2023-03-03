import AppliedEventItem from './MyAppliedEventItem'
import { AppliedEvent } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyAppliedEventListProps {
  myAppliedEvents: AppliedEvent[]
}

const MyAppliedEventList = ({ myAppliedEvents }: MyAppliedEventListProps) => {
  const isDataEmpty = myAppliedEvents && myAppliedEvents.length === 0

  return (
    <ul>
      {!myAppliedEvents || isDataEmpty ? (
        <ActivityEmptyHelper />
      ) : (
        myAppliedEvents.map((appliedEvent) => (
          <AppliedEventItem key={appliedEvent.id} appliedEvent={appliedEvent} />
        ))
      )}
    </ul>
  )
}

export default MyAppliedEventList
