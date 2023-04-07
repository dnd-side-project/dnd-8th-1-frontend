import { useContext } from 'react'
import { CalandarCtx, CalendarProps } from '.'

interface DayListItemProps {
  day: number
}
const DayListItem = ({ day }: DayListItemProps) => {
  const {
    isTotal,
    currentDay,
    handleIsSunday,
    setCurrentDay,
    setIsTotal,
    setPerformanceParams,
  } = useContext(CalandarCtx) as Omit<
    CalendarProps,
    'performanceParams' | 'handleSetMonth'
  >
  return (
    <span
      className={`cursor-pointer text-subtitle font-bold mobile:p-[14px] ${
        currentDay === day && !isTotal
          ? 'border-b-[3px] border-b-green-light text-green-light'
          : handleIsSunday(day)
          ? 'border-b-[2px] border-b-gray-700 text-[#783232]'
          : 'border-b-[2px] border-b-gray-700 text-gray-400'
      } `}
      key={day}
      onClick={() => {
        setCurrentDay(day)
        setIsTotal(false)
        setPerformanceParams((prev) => {
          return {
            ...prev,
            day,
          }
        })
      }}
    >
      {day}
    </span>
  )
}

export default DayListItem
