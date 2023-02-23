import { PerformancePayload } from '@queries'
import { SetStateAction } from 'react'
import DayListItem from './DayListItem'

interface DayListProps {
  calandar: unknown[]
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  isEntire: boolean
  setIsEntire: (value: SetStateAction<boolean>) => void
  setPerformancePayload: (value: SetStateAction<PerformancePayload>) => void
}

const DayList = ({
  isEntire,
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  setIsEntire,
  setPerformancePayload,
}: DayListProps) => {
  return (
    <>
      {calandar.map((_, day) => (
        <DayListItem
          isEntire={isEntire}
          key={day}
          currentDay={currentDay}
          isSunday={isSunday}
          setCurrentDay={setCurrentDay}
          getDay={getDay}
          day={day}
          setIsEntire={setIsEntire}
          setPerformancePayload={setPerformancePayload}
        />
      ))}
    </>
  )
}

export default DayList
