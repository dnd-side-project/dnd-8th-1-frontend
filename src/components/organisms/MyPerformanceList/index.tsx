import MyPerformanceItem from './MyPerformanceItem'
import { MyPerformance } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyPerformanceList {
  myPerformances: MyPerformance[]
}

const MyPerformanceList = ({ myPerformances }: MyPerformanceList) => {
  return (
    <ul>
      {myPerformances.length === 0 && <ActivityEmptyHelper />}
      {myPerformances.length !== 0 &&
        myPerformances.map((myPerformance) => (
          <MyPerformanceItem
            key={myPerformance.id}
            myPerformance={myPerformance}
          />
        ))}
    </ul>
  )
}

export default MyPerformanceList
