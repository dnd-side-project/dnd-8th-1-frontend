import MyPerformanceItem from './MyPerformanceItem'
import { MyPerformance } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyPerformanceList {
  myPerformanceItems: MyPerformance[]
}

const MyPerformanceList = ({ myPerformanceItems }: MyPerformanceList) => {
  return (
    <ul>
      {myPerformanceItems.length === 0 && <ActivityEmptyHelper />}
      {myPerformanceItems.length !== 0 &&
        myPerformanceItems.map((myPerformanceItem) => (
          <MyPerformanceItem
            key={myPerformanceItem.id}
            myPerformanceItem={myPerformanceItem}
          />
        ))}
    </ul>
  )
}

export default MyPerformanceList
