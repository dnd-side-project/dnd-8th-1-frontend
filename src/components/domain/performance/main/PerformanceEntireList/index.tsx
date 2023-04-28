import { PLACEHOLDER_IMG } from '@constants'
import { Performance, PerformanceWithDateHeadlessArgs } from '@types'
import { PerformanceListHeadless } from '@components'
import Image from 'next/image'
import PerformanceListItem from '../PerformanceList/PerformanceListItem'
import emptyImage from '/public/assets/images/graphic_1.png'

interface PerformanceEntireListProps {
  performances: Performance[]
}

const PerformanceEntireList = ({
  performances,
}: PerformanceEntireListProps) => {
  return (
    <PerformanceListHeadless performancesData={performances}>
      {({
        filteredPerformanceData,
        isEmpty,
      }: PerformanceWithDateHeadlessArgs) => {
        return isEmpty ? (
          <div className="mt-[77.87px] mb-[118px] flex w-[100%] flex-col items-center justify-center">
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
          filteredPerformanceData.map((dates, i) => (
            <section key={i}>
              <span className="mb-4 block text-body2 text-gray-300">
                {Object.keys(dates)}
              </span>
              {Object.values(dates).map((performances) =>
                performances.map((performance) => (
                  <PerformanceListItem
                    key={performance.id}
                    performance={performance as Performance}
                  />
                )),
              )}
              <div className="my-[16px] h-[1px] w-[343px] bg-gray-700" />
            </section>
          ))
        )
      }}
    </PerformanceListHeadless>
  )
}

export default PerformanceEntireList
