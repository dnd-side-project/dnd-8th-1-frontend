import { PerformancePayload } from '@queries'
import { Dispatch, SetStateAction } from 'react'
import CalandarSlider from './CalendarSlider'
import CalandarSwiper from './CalendarSwiper'

interface CalendarProps {
  isTotal: boolean
  setIsTotal: Dispatch<SetStateAction<boolean>>
  handleSetMonth: (monthIncrement: number) => void
  isSunday: (day: number) => boolean
  currentDay: number
  setCurrentDay: Dispatch<SetStateAction<number>>
  getDay: (day: number) => number
  month: string
  calandar: unknown[]
  setPerformancePayload: Dispatch<SetStateAction<PerformancePayload>>
  performancePayload: PerformancePayload
}

const Calendar = ({
  isSunday,
  currentDay,
  setCurrentDay,
  getDay,
  calandar,
  handleSetMonth,
  isTotal,
  setIsTotal,
  setPerformancePayload,
  performancePayload,
}: CalendarProps) => {
  return (
    <div className="relative flex flex-col bg-gray-900">
      <div className="flex w-full justify-between pt-[30px] pb-[6px]">
        <CalandarSlider
          performancePayload={performancePayload}
          setPerformancePayload={setPerformancePayload}
          handleSetMonth={handleSetMonth}
          setCurrentDay={setCurrentDay}
          currentDay={currentDay}
        />
      </div>
      <CalandarSwiper
        isTotal={isTotal}
        setIsTotal={setIsTotal}
        calandar={calandar}
        currentDay={currentDay}
        isSunday={isSunday}
        setCurrentDay={setCurrentDay}
        getDay={getDay}
        setPerformancePayload={setPerformancePayload}
      />
    </div>
  )
}

export default Calendar
