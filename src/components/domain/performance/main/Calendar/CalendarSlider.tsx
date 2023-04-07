import { theme } from '@constants'
import { IconButton } from '@components'
import { SetStateAction } from 'react'
import { PerformanceParams } from '@queries'

interface CalendarSliderProps {
  handleSetMonth: (monthIncrement: number) => void
  setCurrentDay: (value: SetStateAction<number>) => void
  currentDay: number
  setPerformanceParams: (value: SetStateAction<PerformanceParams>) => void
  performanceParams: PerformanceParams
}

const CalendarSlider = ({
  handleSetMonth,
  setCurrentDay,
  currentDay,
  setPerformanceParams,
  performanceParams: { month },
}: CalendarSliderProps) => {
  return (
    <div className="flex items-center justify-center pl-[10px]">
      <IconButton
        size={24}
        color={theme.colors.gray[500]}
        areaLabel="이전 월로 이동하기"
        icon="arrow-left"
        handleOnClick={() => {
          if (month === 1) {
            handleSetMonth(12)
            setCurrentDay(currentDay)
            setPerformanceParams((prev) => {
              return {
                ...prev,
                month: prev.month && 12,
                year: prev.year && prev.year - 1,
              }
            })
          } else {
            handleSetMonth(-1)
            setCurrentDay(currentDay)
            setPerformanceParams((prev) => {
              return {
                ...prev,
                month: prev.month && prev.month - 1,
              }
            })
          }
        }}
      />
      <p className="text-black px-[6px] text-body1 font-bold text-gray-300">
        {`${month}월`}
      </p>
      <IconButton
        size={24}
        color={theme.colors.gray[500]}
        areaLabel="다음 월로 이동하기"
        icon="arrow-right"
        handleOnClick={() => {
          handleSetMonth(1)
          if (month === 12) {
            setPerformanceParams((prev) => {
              return {
                ...prev,
                month: prev.month && 1,
                year: prev.year && prev.year + 1,
              }
            })
          } else {
            setPerformanceParams((prev) => {
              return {
                ...prev,
                month: prev.month && prev.month + 1,
              }
            })
            setCurrentDay(currentDay)
          }
        }}
      />
    </div>
  )
}

export default CalendarSlider
