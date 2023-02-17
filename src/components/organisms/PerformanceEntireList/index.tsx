import { Performance } from '@types'
import PerformanceListItem from '../PerformanceList/PerformanceListItem'

interface PerformanceEntireListProps {
  performances: Performance[]
}
const makeDate = (date: string) => {
  return `${date[0]}월 ${date.slice(2, 4)}일`
}
const PerformanceEntireList = ({
  performances,
}: PerformanceEntireListProps) => {
  const entireDate = Array.from(
    new Set(
      performances.map((performance) =>
        makeDate(performance.performStartDate.slice(6, 10)),
      ),
    ),
  )
  const filterPerformance = (date: string) => {
    return performances.filter((performance) => {
      const performStartDate = makeDate(
        performance.performStartDate.slice(6, 10),
      )
      return date === performStartDate
    })
  }
  const entirePerformances = Array.from(
    { length: entireDate.length },
    (_, i) => {
      return {
        [entireDate[i]]: filterPerformance(entireDate[i]),
      }
    },
  )
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
        entirePerformances.map((dates, i) => (
          <section key={i}>
            <span className="mb-4 block text-body2 text-gray-300">
              {Object.keys(dates)}
            </span>
            {Object.values(dates).map((performances) =>
              performances.map((performance) => (
                <PerformanceListItem
                  key={performance.performId}
                  performance={performance}
                />
              )),
            )}
            <div className="my-[16px] h-[1px] w-[343px] bg-gray-700" />
          </section>
        ))
      )}
    </>
  )
}

export default PerformanceEntireList
