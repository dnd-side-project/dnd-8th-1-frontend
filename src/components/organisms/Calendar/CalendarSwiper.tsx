import { PerformancePayload } from '@queries'
import { SetStateAction } from 'react'
import DayList from './DayList'

interface CalendarSwiperProps {
  calandar: unknown[]
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  isTotal: boolean
  setIsTotal: (value: SetStateAction<boolean>) => void
  setPerformancePayload: (value: SetStateAction<PerformancePayload>) => void
}

const CalendarSwiper = ({
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  isTotal,
  setIsTotal,
  setPerformancePayload,
}: CalendarSwiperProps) => {
  return (
    <div className="no-scrollbar flex h-[57px] w-[100%] resize-none overflow-x-scroll pl-[58px]">
      <div>
        <button
          onClick={() => {
            setPerformancePayload((prev) => ({
              ...prev,
              day: '',
            }))
            setIsTotal(true)
          }}
          className={`b-0 absolute left-0 h-[57px] bg-gray-900 px-[16px] text-[16px] font-bold  ${
            isTotal
              ? 'h-[57px] border-b-[3px] border-b-green-light pt-[1px] text-green-light'
              : 'border-b-[2px] border-b-gray-700 text-gray-400'
          }`}
        >
          전체
        </button>
      </div>
      <DayList
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

export default CalendarSwiper
