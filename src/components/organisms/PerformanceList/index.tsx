import { Performance } from '@types'
import PerformanceListItem from './PerformanceListItem'

interface PerformanceListProps {
  performances: Performance[]
}

const PerformanceList = ({ performances }: PerformanceListProps) => {
  const isEmptyPerformances = performances.length === 0
  return (
    <>
      {isEmptyPerformances ? (
        <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
          {/* TODO: 디자인 팀에 이미지 받기 */}
          {/* 레이아웃을 위한 임시 박스 */}
          <div className="h-[133.45px] w-[162.12px] bg-green-light"></div>
          <p className=" mt-[18.69px] text-center text-body1 text-gray-500 ">
            조건에 맞는 결과가 없습니다
          </p>
        </div>
      ) : (
        performances.map((performance) => (
          <PerformanceListItem
            key={performance.performId}
            performance={performance}
          />
        ))
      )}
    </>
  )
}

export default PerformanceList
