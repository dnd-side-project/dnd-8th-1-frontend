import { PerformancePayload } from '@queries'
import { SetStateAction } from 'react'
import DayList from './DayList'

interface CalandarSwiperProps {
  calandar: unknown[]
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
  isEntire: boolean
  setIsEntire: (value: SetStateAction<boolean>) => void
  setPerformancePayload: (value: SetStateAction<PerformancePayload>) => void
}

const CalandarSwiper = ({
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
  isEntire,
  setIsEntire,
  setPerformancePayload,
}: CalandarSwiperProps) => {
  return (
    <div className="no-scrollbar flex w-[100%] resize-none overflow-x-scroll pl-[58px]">
      <div>
        <button
          onClick={() => {
            setPerformancePayload((prev) => ({
              ...prev,
              day: '',
            }))
            setIsEntire(true)
          }}
          className={`b-0 absolute left-0 h-[57px] bg-gray-900 px-[16px] text-[16px] font-bold  ${
            isEntire
              ? 'border-b-[3px] border-b-green-light text-green-light'
              : 'border-b-[2px] border-b-gray-700 text-gray-400'
          }`}
        >
          전체
        </button>
      </div>
      <DayList
        isEntire={isEntire}
        setIsEntire={setIsEntire}
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

export default CalandarSwiper
