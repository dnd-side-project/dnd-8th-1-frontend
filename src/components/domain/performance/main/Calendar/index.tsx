import { PerformancePayload } from '@queries'
import { createContext, Dispatch, SetStateAction } from 'react'
import CalandarSlider from './CalendarSlider'
import CalandarSwiper from './CalendarSwiper'

export interface CalendarProps {
  isTotal: boolean
  setIsTotal: Dispatch<SetStateAction<boolean>>
  handleSetMonth: (monthIncrement: number) => void
  handleIsSunday: (day: number) => boolean
  currentDay: number
  setCurrentDay: Dispatch<SetStateAction<number>>
  handleGetDay: (day: number) => number
  month: string
  calandar: unknown[]
  setPerformancePayload: Dispatch<SetStateAction<PerformancePayload>>
  performancePayload: PerformancePayload
}

export const CalandarCtx = createContext({})

const Calendar = ({
  handleIsSunday,
  currentDay,
  setCurrentDay,
  handleGetDay,
  calandar,
  handleSetMonth,
  isTotal,
  setIsTotal,
  setPerformancePayload,
  performancePayload,
}: CalendarProps) => {
  return (
    <CalandarCtx.Provider
      value={{
        calandar,
        currentDay,
        handleIsSunday,
        setCurrentDay,
        handleGetDay,
        isTotal,
        setIsTotal,
        setPerformancePayload,
      }}
    >
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
        <CalandarSwiper />
      </div>
    </CalandarCtx.Provider>
  )
}

export default Calendar
