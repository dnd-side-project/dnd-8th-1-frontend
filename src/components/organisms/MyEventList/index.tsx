import MyEventItem from './MyEventItem'
import { MyEvent } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyEventListProps {
  myEventItems: MyEvent[]
}

const MyEventList = ({ myEventItems }: MyEventListProps) => {
  return (
    <ul>
      {myEventItems.length === 0 && <ActivityEmptyHelper />}
      {myEventItems.length !== 0 &&
        myEventItems.map((myEventItem) => (
          <MyEventItem key={myEventItem.id} myEventItem={myEventItem} />
        ))}
    </ul>
  )
}

export default MyEventList
