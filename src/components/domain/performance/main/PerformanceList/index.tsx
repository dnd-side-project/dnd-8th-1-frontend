import { PLACEHOLDER_IMG } from '@constants'
import { Performance } from '@types'
import Image from 'next/image'
import PerformanceListItem from './PerformanceListItem'
import emptyImage from '/public/assets/images/graphic_1.png'

interface PerformanceListProps {
  performances: Performance[]
}

const PerformanceList = ({ performances }: PerformanceListProps) => {
  const isEmptyPerformances = performances?.length === 0
  return (
    <>
      {isEmptyPerformances ? (
        <div className="relative w-[fit] pl-[20px]">
          <Image
            src={emptyImage}
            alt="emptyImage"
            width={200}
            height={200}
            placeholder="empty"
            blurDataURL={PLACEHOLDER_IMG}
          />
          <p className="absolute left-[20px] bottom-0 text-center text-body1 text-gray-500 ">
            조건에 맞는 결과가 없습니다
          </p>
        </div>
      ) : (
        performances?.map((performance) => (
          <PerformanceListItem key={performance.id} performance={performance} />
        ))
      )}
    </>
  )
}

export default PerformanceList
