import { SetStateAction } from 'react'
import DayList from './DayList'

interface CalandarSwiperProps {
  calandar: unknown[]
  currentDay: number
  isSunday: (day: number) => boolean
  setCurrentDay: (value: SetStateAction<number>) => void
  getDay: (day: number) => number
}

const CalandarSwiper = ({
  calandar,
  currentDay,
  isSunday,
  setCurrentDay,
  getDay,
}: CalandarSwiperProps) => {
  return (
    <div className="no-scrollbar flex w-[100%] resize-none overflow-x-scroll pl-[58px]">
      <div>
        <button className="b-0 absolute left-0 h-[57px] border-b-[3px] border-b-gray-700 bg-gray-900 px-[16px] text-[16px] font-bold text-gray-400">
          전체
        </button>
      </div>
      <DayList
        calandar={calandar}
        currentDay={currentDay}
        isSunday={isSunday}
        setCurrentDay={setCurrentDay}
        getDay={getDay}
      />
    </div>
  )
}

export default CalandarSwiper
