import WrittenEventItem from './WrittenEventItem'
import { WrittenEvent } from '@types'
import { ActivityEmptyHelper } from '@components'

interface WrittenEventListProps {
  writtenEventItems: WrittenEvent[]
}

const WrittenEventList = ({ writtenEventItems }: WrittenEventListProps) => {
  return (
    <ul>
      {writtenEventItems.length === 0 && <ActivityEmptyHelper />}
      {writtenEventItems.length !== 0 &&
        writtenEventItems.map((writtenEventItem) => (
          <WrittenEventItem
            key={writtenEventItem.id}
            writtenEventItem={writtenEventItem}
          />
        ))}
    </ul>
  )
}

export default WrittenEventList
