import { SetStateAction } from 'react'
import DayListItem from './DayListItem'

interface DayListProps {
  calandar: unknown[]
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
}

const DayList = ({
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
}: DayListProps) => {
  return (
    <>
      {calandar.map((_, day) => (
        <DayListItem
          key={day}
          currentDay={currentDay}
          isSunday={isSunday}
          setCurrentDay={setCurrentDay}
          getDay={getDay}
          day={day}
        />
      ))}
    </>
  )
}

export default DayList
