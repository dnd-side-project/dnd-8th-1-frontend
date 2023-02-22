import { SetStateAction } from 'react'

interface DayListItemProps {
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  day: number
  isEntire: boolean
  setIsEntire: (value: SetStateAction<boolean>) => void
}
const DayListItem = ({
  isEntire,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  day,
  setIsEntire,
}: DayListItemProps) => {
  return (
    <span
      className={`cursor-pointer text-subtitle font-bold mobile:p-[14px] ${
        currentDay === day && !isEntire
          ? 'border-b-[3px] border-b-green-light text-green-light'
          : isSunday(day)
          ? 'border-b-[2px] border-b-gray-700 text-[#783232]'
          : 'border-b-[2px] border-b-gray-700 text-gray-400'
      } `}
      key={day}
      onClick={() => {
        setCurrentDay(day)
        setIsEntire(false)
      }}
    >
      {getDay(day)}
    </span>
  )
}

export default DayListItem
