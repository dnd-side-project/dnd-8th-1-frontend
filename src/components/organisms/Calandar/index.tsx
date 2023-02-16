import { useCalendar } from '@hooks'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import CalandarSlider from './CalandarSlider'
import CalandarSwiper from './CalandarSwiper'

interface CalendarProps {
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>
}

const Calendar = ({ setIsSearchOpen }: CalendarProps) => {
  const {
    month,
    handleSetMonth,
    isSunday,
    setCurrentDay,
    currentDay,
    getDay,
    calandar,
  } = useCalendar()
  const router = useRouter()
  return (
    <div className="relative flex flex-col bg-gray-900">
      <div className="flex w-full justify-between pt-[50px] pb-[20px]">
        <CalandarSlider
          handleSetMonth={handleSetMonth}
          setCurrentDay={setCurrentDay}
          month={month}
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
        calandar={calandar}
        currentDay={currentDay}
        isSunday={isSunday}
        setCurrentDay={setCurrentDay}
        getDay={getDay}
      />
    </div>
  )
}

export default Calendar
