import { PerformancePayload } from '@queries'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import CalandarSlider from './CalandarSlider'
import CalandarSwiper from './CalandarSwiper'

interface CalendarProps {
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>
  isEntire: boolean
  setIsEntire: Dispatch<SetStateAction<boolean>>
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
  month,
  handleSetMonth,
  setIsSearchOpen,
  isEntire,
  setIsEntire,
  setPerformancePayload,
  performancePayload,
}: CalendarProps) => {
  const router = useRouter()
  return (
    <div className="relative flex flex-col bg-gray-900">
      <div className="flex w-full justify-between pt-[50px] pb-[20px]">
        <CalandarSlider
          performancePayload={performancePayload}
          setPerformancePayload={setPerformancePayload}
          handleSetMonth={handleSetMonth}
          setCurrentDay={setCurrentDay}
          currentDay={currentDay}
        />
        <div className="flex">
          <button
            onClick={() => router.push('/performance/edit')}
            className="text-body1 text-gray-300"
          >
            등록
          </button>
          <button
            onClick={() => setIsSearchOpen(true)}
            className="mr-[16px] pl-[14px] text-body1 text-gray-300"
          >
            공연 검색
          </button>
        </div>
      </div>
      <CalandarSwiper
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

export default Calendar
