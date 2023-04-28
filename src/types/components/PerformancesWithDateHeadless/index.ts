import { Performance, SearchResult } from '@types'

export interface PerformanceWithDateHeadlessArgs {
  filteredPerformanceData: {
    [x: string]: Performance[] | SearchResult[]
  }[]
  isEmpty: boolean
}
