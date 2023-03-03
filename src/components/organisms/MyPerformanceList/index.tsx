import MyPerformanceItem from './MyPerformanceItem'
import { MyPerformance } from '@types'
import { ActivityEmptyHelper } from '@components'

interface MyPerformanceList {
  myPerformances: MyPerformance[]
}

const MyPerformanceList = ({ myPerformances }: MyPerformanceList) => {
  const isDataEmpty = myPerformances && myPerformances.length === 0

  return (
    <ul>
      {!myPerformances || isDataEmpty ? (
        <ActivityEmptyHelper />
      ) : (
        myPerformances.length !== 0 &&
        myPerformances.map((myPerformance) => (
          <MyPerformanceItem
            key={myPerformance.id}
            myPerformance={myPerformance}
          />
        ))
      )}
    </ul>
  )
}

export default MyPerformanceList
