import { useContext } from 'react'
import { CalandarCtx, CalendarProps } from '.'
import DayList from './DayList'

const CalendarSwiper = () => {
  const { isTotal, setIsTotal, setPerformanceParams } = useContext(
    CalandarCtx,
  ) as Pick<CalendarProps, 'isTotal' | 'setIsTotal' | 'setPerformanceParams'>
  return (
    <div className="no-scrollbar flex h-[57px] w-[100%] resize-none overflow-x-scroll pl-[58px]">
      <div>
        <button
          onClick={() => {
            setPerformanceParams((prev) => ({
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
      <DayList />
    </div>
  )
}

export default CalendarSwiper
