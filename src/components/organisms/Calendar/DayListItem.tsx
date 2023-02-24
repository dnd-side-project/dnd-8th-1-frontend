import { PerformancePayload } from '@queries'
import { SetStateAction } from 'react'

interface DayListItemProps {
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  day: number
  isTotal: boolean
  setIsTotal: (value: SetStateAction<boolean>) => void
  setPerformancePayload: (value: SetStateAction<PerformancePayload>) => void
}
const DayListItem = ({
  isTotal,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  day,
  setIsTotal,
  setPerformancePayload,
}: DayListItemProps) => {
  return (
    <span
      className={`cursor-pointer text-subtitle font-bold mobile:p-[14px] ${
        currentDay === day && !isTotal
          ? 'border-b-[3px] border-b-green-light text-green-light'
          : isSunday(day)
          ? 'border-b-[2px] border-b-gray-700 text-[#783232]'
          : 'border-b-[2px] border-b-gray-700 text-gray-400'
      } `}
      key={day}
      onClick={() => {
        setCurrentDay(day)
        setIsTotal(false)
        setPerformancePayload((prev) => {
          return {
            ...prev,
            day: getDay(day),
          }
        })
      }}
    >
      {getDay(day)}
    </span>
  )
}

export default DayListItem
