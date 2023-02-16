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
}

const DayList = ({
  isEntire,
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  setIsEntire,
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
        />
      ))}
    </>
  )
}

export default DayList
