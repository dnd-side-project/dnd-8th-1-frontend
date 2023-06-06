import { useWithDatePerformances } from '@hooks'
import {
  Performance,
  PerformanceWithDateHeadlessArgs,
  SearchResult,
} from '@types'

const PerformancesWithDateHeadless = (props: {
  children: (
    args: PerformanceWithDateHeadlessArgs,
  ) => JSX.Element | JSX.Element[]
  performancesData: Performance[] | SearchResult[]
}) => {
  const { filteredPerformanceData, isEmpty } = useWithDatePerformances(
    props.performancesData,
  )
  return (
    <>
      {props.children({
        filteredPerformanceData,
        isEmpty,
      })}
    </>
  )
}

export default PerformancesWithDateHeadless
