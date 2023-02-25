import { Performance } from '@types'
import MainPerformanceListItem from './MainPerformanceListItem'

interface MainMeetSectionProps {
  performanceList: Omit<Performance, 'performStartDate'>[]
}

const MainPerformanceList = ({ performanceList }: MainMeetSectionProps) => {
  return (
    <section className="no-scrollbar mt-[28px] flex overflow-x-scroll">
      {performanceList.map((performanceListItem) => (
        <MainPerformanceListItem
          key={performanceListItem.id}
          performanceItem={performanceListItem}
        />
      ))}
    </section>
  )
}

export default MainPerformanceList
