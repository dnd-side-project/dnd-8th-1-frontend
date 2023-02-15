import { Performance } from '@types'
import PerformanceListItem from './PerformanceListItem'

interface PerformanceListProps {
  performances: Performance[]
}

const PerformanceList = ({ performances }: PerformanceListProps) => {
  return (
    <>
      {performances.map((performance) => (
        <PerformanceListItem
          key={performance.performId}
          performance={performance}
        />
      ))}
    </>
  )
}

export default PerformanceList
