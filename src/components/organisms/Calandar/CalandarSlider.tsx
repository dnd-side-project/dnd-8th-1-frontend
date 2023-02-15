import { theme } from '@constants'
import { IconButton } from '@components'
import { SetStateAction } from 'react'

interface CalandarSliderProps {
  handleSetMonth: (monthIncrement: number) => void
  setCurrentDay: (value: SetStateAction<number>) => void
  currentDay: number
  month: string
}

const CalandarSlider = ({
  handleSetMonth,
  setCurrentDay,
  currentDay,
  month,
}: CalandarSliderProps) => {
  return (
    <div className="flex items-center justify-center py-[24px] pl-[10px]">
      <IconButton
        size={24}
        color={theme.colors.gray[500]}
        areaLabel="이전 월로 이동하기"
        icon="arrow-left"
        handleOnClick={() => {
          handleSetMonth(-1)
          setCurrentDay(currentDay)
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
          setCurrentDay(currentDay)
        }}
      />
    </div>
  )
}

export default CalandarSlider
