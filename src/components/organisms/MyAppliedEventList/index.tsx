import AppliedEventItem from './MyAppliedEventItem'
import { AppliedEvent } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyAppliedEventListProps {
  myAppliedEvents: AppliedEvent[]
}

const MyAppliedEventList = ({ myAppliedEvents }: MyAppliedEventListProps) => {
  return (
    <ul>
      {myAppliedEvents.length === 0 && <ActivityEmptyHelper />}
      {myAppliedEvents.length !== 0 &&
        myAppliedEvents.map((appliedEvent) => (
          <AppliedEventItem key={appliedEvent.id} appliedEvent={appliedEvent} />
        ))}
    </ul>
  )
}

export default MyAppliedEventList
