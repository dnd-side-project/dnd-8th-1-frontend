import { IconButton } from '@components'
import { RecruitmentType } from '@types'
import { useState } from 'react'

interface CountPeopleProps {
  currentType: RecruitmentType
  handleCountPeople: (count: number) => void
  initialCount?: number
}

const CountPeople = ({
  currentType,
  handleCountPeople,
  initialCount,
}: CountPeopleProps) => {
  const [count, setCount] = useState(initialCount ? initialCount : 1)

  return (
    <div className="mt-[23px] flex items-center justify-center gap-[36.83px]">
      <IconButton
        icon={count <= 1 ? 'minus-circle-inactive' : 'minus-circle-active'}
        size={20}
        areaLabel="모집 인원 감소 버튼"
        handleOnClick={() => {
          if (count <= 1) {
            return
          }
          setCount(count - 1)
          handleCountPeople(count - 1)
        }}
        styleClass={`${count <= 1 && 'cursor-default'}`}
      />

      <div className="flex gap-[8px] text-subtitle font-bold text-gray-100">
        <span>{count}</span>
        <span>{currentType === '댄서' ? '명' : '팀'}</span>
      </div>

      <IconButton
        icon="plus-circle-active"
        size={20}
        areaLabel="모집 인원 증가 버튼"
        handleOnClick={() => {
          setCount(count + 1)
          handleCountPeople(count + 1)
        }}
      />
    </div>
  )
}
export default CountPeople
