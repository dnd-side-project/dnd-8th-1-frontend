import { PerformancePayload } from '@queries'
import { SetStateAction } from 'react'
import DayListItem from './DayListItem'

interface DayListProps {
  calandar: unknown[]
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  isTotal: boolean
  setIsTotal: (value: SetStateAction<boolean>) => void
  setPerformancePayload: (value: SetStateAction<PerformancePayload>) => void
}

const DayList = ({
  isTotal,
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  setIsTotal,
  setPerformancePayload,
}: DayListProps) => {
  return (
    <>
      {calandar.map((_, day) => (
        <DayListItem
          isTotal={isTotal}
          key={day}
          currentDay={currentDay}
          isSunday={isSunday}
          setCurrentDay={setCurrentDay}
          getDay={getDay}
          day={day}
          setIsTotal={setIsTotal}
          setPerformancePayload={setPerformancePayload}
        />
      ))}
    </>
  )
}

export default DayList
