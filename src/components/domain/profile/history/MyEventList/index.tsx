import MyEventItem from './MyEventItem'
import { MyEvent } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyEventListProps {
  myEvents: MyEvent[]
}

const MyEventList = ({ myEvents }: MyEventListProps) => {
  const isDataEmpty = myEvents && myEvents.length === 0

  return (
    <ul>
      {!myEvents || isDataEmpty ? (
        <ActivityEmptyHelper />
      ) : (
        myEvents.map((myEvent) => (
          <MyEventItem key={myEvent.id} myEvent={myEvent} />
        ))
      )}
    </ul>
  )
}

export default MyEventList
