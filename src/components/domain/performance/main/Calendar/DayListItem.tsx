import { useContext } from 'react'
import { CalandarCtx, CalendarProps } from '.'

interface DayListItemProps {
  day: number
}
const DayListItem = ({ day }: DayListItemProps) => {
  const {
    isTotal,
    currentDay,
    isSunday,
    setCurrentDay,
    getDay,
    setIsTotal,
    setPerformancePayload,
  } = useContext(CalandarCtx) as Omit<
    CalendarProps,
    'performancePayload' | 'handleSetMonth'
  >
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
