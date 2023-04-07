import { PerformanceParams } from '@queries'
import { createContext, Dispatch, SetStateAction } from 'react'
import CalandarSlider from './CalendarSlider'
import CalandarSwiper from './CalendarSwiper'

export interface CalendarProps {
  isTotal: boolean // 전체 버튼 클릭 유무 확인 boolean
  setIsTotal: Dispatch<SetStateAction<boolean>> // isTotal 값을 변경해주는 setState
  handleSetMonth: (monthIncrement: number) => void // CalendarSlider에서 버튼 클릭 시 달이 변경 되도록 하는 함수
  handleIsSunday: (day: number) => boolean // 해당 요일이 일요일인지 확인하는 함수
  currentDay: number // 현재 클릭한 날짜에 대한 변수
  setCurrentDay: Dispatch<SetStateAction<number>> // currentDay를 변경하기 위한 setState
  calandar: number[] // 현재 달에 대한 1일 ~ 달의 마지막 일 까지의 배열을 만드는 변수
  performanceParams: PerformanceParams // 공연 정보 메인 api를 호출 할 때 필요한 매개변수 데이터
  setPerformanceParams: Dispatch<SetStateAction<PerformanceParams>> // performanceParams에 대한 setState
}

export const CalandarCtx = createContext({})

const Calendar = ({
  handleIsSunday,
  currentDay,
  setCurrentDay,
  calandar,
  handleSetMonth,
  isTotal,
  setIsTotal,
  setPerformanceParams,
  performanceParams,
}: CalendarProps) => {
  return (
    <CalandarCtx.Provider
      value={{
        calandar,
        currentDay,
        handleIsSunday,
        setCurrentDay,
        isTotal,
        setIsTotal,
        setPerformanceParams,
      }}
    >
      <div className="relative flex flex-col bg-gray-900">
        <div className="flex w-full justify-between pt-[30px] pb-[6px]">
          <CalandarSlider
            performanceParams={performanceParams}
            setPerformanceParams={setPerformanceParams}
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
