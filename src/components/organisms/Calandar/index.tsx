import { useCalendar } from '@hooks'
import CalandarSlider from './CalandarSlider'
import CalandarSwiper from './CalandarSwiper'

const Calendar = () => {
  const {
    month,
    handleSetMonth,
    isSunday,
    setCurrentDay,
    currentDay,
    getDay,
    calandar,
  } = useCalendar()
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
          <button className="text-body1 text-gray-300">등록</button>
          <button className="mr-[16px] pl-[14px] text-body1 text-gray-300">
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
