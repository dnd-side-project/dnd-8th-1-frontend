import { Performance, SearchResult } from '@types'
import dayjs from 'dayjs'

const useWithDatePerformances = <T extends Performance[] | SearchResult[]>(
  performances: T,
) => {
  const makeDate = (date: string) => {
    const day = dayjs(date)
    return day.format('M월 D일')
  }

  const entireDate = Array.from(
    new Set(performances?.map((item) => item.startDate)),
  )
    .sort((a, b) => {
      return dayjs(b).valueOf() - dayjs(a).valueOf()
    })
    .map((item) => makeDate(item))

  const filterPerformance: (date: string) => Performance[] | SearchResult[] = (
    date: string,
  ) => {
    return performances.filter((item: Performance | SearchResult) => {
      const performStartDate = makeDate(item.startDate)
      return date === performStartDate
    })
  }

  const filteredPerformanceData = Array.from(
    { length: entireDate.length },
    (_, i) => {
      return {
        [entireDate[i]]: filterPerformance(entireDate[i]),
      }
    },
  )

  const isEmpty = performances?.length === 0

  return { filteredPerformanceData, isEmpty }
}

export default useWithDatePerformances
