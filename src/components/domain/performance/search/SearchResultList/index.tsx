import { PerformanceWithDateHeadlessArgs, SearchResult } from '@types'
import SearchResultListItem from './SearchResultListItem'
import emptyImage from '/public/assets/images/graphic_1.png'
import Image from 'next/image'
import { PLACEHOLDER_IMG } from '@constants'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import { PerformanceListHeadless } from '@components'
dayjs.locale('ko')

interface SearchResultListProps {
  searchResultList: SearchResult[]
}

const SearchResultList = ({ searchResultList }: SearchResultListProps) => {
  return (
    <PerformanceListHeadless performancesData={searchResultList}>
      {({
        filteredPerformanceData,
        isEmpty,
      }: PerformanceWithDateHeadlessArgs) => {
        return (
          <>
            {isEmpty ? (
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
                  <p className="absolute left-[34px] bottom-0 text-center text-body1 text-gray-500 ">
                    검색된 공연이 없습니다.
                  </p>
                </div>
              </div>
            ) : (
              filteredPerformanceData.map((dates, i) => (
                <section key={i}>
                  <span className="mb-4 block text-body2 text-gray-300">
                    {Object.keys(dates)}
                  </span>
                  {Object.values(dates).map((results) =>
                    results.map((result) => (
                      <SearchResultListItem
                        key={result.id}
                        searchResult={result}
                      />
                    )),
                  )}
                  <div className="my-[16px] h-[1px] w-[343px] bg-gray-700" />
                </section>
              ))
            )}
          </>
        )
      }}
    </PerformanceListHeadless>
  )
}

export default SearchResultList
