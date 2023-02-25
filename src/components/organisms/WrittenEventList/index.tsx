import WrittenEventItem from './WrittenEventItem'
import { WrittenEvent } from '@types'
import { Divider } from '@chakra-ui/react'
import { theme } from '@constants'

interface WrittenEventListProps {
  writtenEventItems: WrittenEvent[]
}

const WrittenEventList = ({ writtenEventItems }: WrittenEventListProps) => {
  return (
    <ul>
      {writtenEventItems.map((writtenEventItem) => (
        <WrittenEventItem
          key={writtenEventItem.id}
          writtenEventItem={writtenEventItem}
        />
      ))}
    </ul>
  )
}

export default WrittenEventList
