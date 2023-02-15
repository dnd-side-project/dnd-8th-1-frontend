import { SetStateAction } from 'react'

interface DayListItemProps {
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  day: number
}
const DayListItem = ({
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  day,
}: DayListItemProps) => {
  return (
    <span
      className={`cursor-pointer text-subtitle font-bold mobile:p-[14px] ${
        currentDay === day
          ? 'border-b-[3px] border-b-green-light text-green-light'
          : isSunday(day)
          ? 'border-b-[3px] border-b-gray-700 text-[#783232]'
          : 'border-b-[3px] border-b-gray-700 text-gray-400'
      } `}
      key={day}
      onClick={() => setCurrentDay(day)}
    >
      {getDay(day)}
    </span>
  )
}

export default DayListItem
