import MyEventItem from './MyEventItem'
import { MyEvent } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyEventListProps {
  myEvents: MyEvent[]
}

const MyEventList = ({ myEvents }: MyEventListProps) => {
  return (
    <ul>
      {myEvents.length === 0 && <ActivityEmptyHelper />}
      {myEvents.length !== 0 &&
        myEvents.map((myEvent) => (
          <MyEventItem key={myEvent.id} myEvent={myEvent} />
        ))}
    </ul>
  )
}

export default MyEventList
