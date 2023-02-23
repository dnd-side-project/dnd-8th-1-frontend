import { PLACEHOLDER_IMG } from '@constants'
import { Performance } from '@types'
import dayjs from 'dayjs'
import Image from 'next/image'
import PerformanceListItem from '../PerformanceList/PerformanceListItem'
import emptyImage from '/public/assets/images/graphic_1.png'

interface PerformanceEntireListProps {
  performances: Performance[]
}

const PerformanceEntireList = ({
  performances,
}: PerformanceEntireListProps) => {
  const makeDate = (date: string) => {
    const day = dayjs(date)
    return day.format('M월 D일')
  }

  const entireDate = Array.from(
    new Set(performances.map((item) => item.startDate)),
  )
    .sort((a, b) => {
      return dayjs(b).valueOf() - dayjs(a).valueOf()
    })
    .map((item) => makeDate(item))

  const filterPerformance = (date: string) => {
    return performances.filter((item) => {
      const performStartDate = makeDate(item.startDate)
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

  const isEmptyPerformances = performances?.length === 0
  return (
    <>
      {isEmptyPerformances ? (
        <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
          {/**
           *TODO: StyledImage 사용 시 렌더링 사이즈가 375px로 잡혀서 Image 컴포넌트 사용하는 것으로 변경 됨
           */}
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
                  key={performance.id}
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
